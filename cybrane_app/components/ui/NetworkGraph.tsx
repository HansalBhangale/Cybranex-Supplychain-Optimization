// #this page name was pages.tsx but I changed it to Dashboard.tsx
import React, { useState, useEffect, JSX } from 'react';
import { motion } from 'framer-motion';

interface NetworkGraphProps {
  supplierToWarehouseCost: number[][];
  warehouseToRetailerCost: number[][];
  supplierInventory: number[];
  warehouseInventory: number[];
  retailerInventory: number[];
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({
  supplierToWarehouseCost,
  warehouseToRetailerCost,
  supplierInventory,
  warehouseInventory,
  retailerInventory
}) => {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [fetchedData, setFetchedData] = useState<any>(null);
  const [supplierToWarehouseTransfers, setSupplierToWarehouseTransfers] = useState<number[][]>([]);
  const [warehouseToRetailerTransfers, setWarehouseToRetailerTransfers] = useState<number[][]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = {
  //         supplier_to_warehouse_cost: JSON.stringify(supplierToWarehouseCost),
  //         warehouse_to_retailer_cost: JSON.stringify(warehouseToRetailerCost),
  //         supplier_inventory: JSON.stringify(supplierInventory),
  //         warehouse_inventory: JSON.stringify(warehouseInventory),
  //         retailer_inventory: JSON.stringify(retailerInventory),
  //       };

  //       const queryParams = new URLSearchParams(result).toString();
  //       const response = await fetch(`http://127.0.0.1:8000/api/path/optimal?${queryParams}`, {
  //         method: 'GET',
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const resultData = await response.json();
  //       console.log('Fetched result:', resultData);

  //       setFetchedData(resultData);

  //       const [supplierToWarehouse, warehouseToRetailer] = decodeTransferDecisions(
  //         resultData.optimal_bitstring,
  //         supplierInventory.length,
  //         warehouseInventory.length,
  //         retailerInventory.length
  //       );

  //       setSupplierToWarehouseTransfers(supplierToWarehouse);
  //       setWarehouseToRetailerTransfers(warehouseToRetailer);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [supplierToWarehouseCost, warehouseToRetailerCost, supplierInventory, warehouseInventory, retailerInventory]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = {
          supplierToWarehouse: supplierToWarehouseCost,
          warehouseToRetailer: warehouseToRetailerCost,
          supplierInventory: supplierInventory,
          warehouseInventory: warehouseInventory,
          retailerInventory: retailerInventory,
        };
  
        const response = await fetch("http://127.0.0.1:8000/api/path/optimal", {
          method: "POST",  // ✅ Correct HTTP method
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),  // ✅ Send JSON body
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch cost optimization results.");
        }
  
        const resultData = await response.json();
        console.log("Fetched result:", resultData);
  
        setFetchedData(resultData);
  
        // Ensure the backend response contains the expected values
        if (resultData.optimal_bitstring) {
          const [supplierToWarehouse, warehouseToRetailer] = decodeTransferDecisions(
            resultData.optimal_bitstring,
            supplierInventory.length,
            warehouseInventory.length,
            retailerInventory.length
          );
  
          setSupplierToWarehouseTransfers(supplierToWarehouse);
          setWarehouseToRetailerTransfers(warehouseToRetailer);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [supplierToWarehouseCost, warehouseToRetailerCost, supplierInventory, warehouseInventory, retailerInventory]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  const decodeTransferDecisions = (
    bitstring: string,
    numSuppliers: number,
    numWarehouses: number,
    numRetailers: number
  ): [number[][], number[][]] => {
    // Initialize arrays with zeros
    const supplierToWarehouseDecisions: number[][] = Array(numSuppliers)
      .fill(null)
      .map(() => Array(numWarehouses).fill(0));
    
    const warehouseToRetailerDecisions: number[][] = Array(numWarehouses)
      .fill(null)
      .map(() => Array(numRetailers).fill(0));
  
    // Process supplier-to-warehouse transfers (first 9 bits)
    for (let supplier = 0; supplier < numSuppliers; supplier++) {
      for (let warehouse = 0; warehouse < numWarehouses; warehouse++) {
        const index = supplier * numWarehouses + warehouse;
        supplierToWarehouseDecisions[supplier][warehouse] = parseInt(bitstring[index]);
      }
    }
  
    // Process warehouse-to-retailer transfers (last 9 bits)
    const offset = numSuppliers * numWarehouses; // 9 bits
    for (let warehouse = 0; warehouse < numWarehouses; warehouse++) {
      for (let retailer = 0; retailer < numRetailers; retailer++) {
        const index = offset + warehouse * numRetailers + retailer;
        warehouseToRetailerDecisions[warehouse][retailer] = parseInt(bitstring[index]);
      }
    }
  
    return [supplierToWarehouseDecisions, warehouseToRetailerDecisions];
  };
  
  // Test the decoder with the example bitstring
  const optimal_bitstring = fetchedData?.optimal_bitstring || '';
  const [supplierToWarehouse, warehouseToRetailer] = decodeTransferDecisions(
    optimal_bitstring,
    3, // numSuppliers
    3, // numWarehouses
    3  // numRetailers
  );

 

  const calculateLabelPosition = (x1: number, y1: number, x2: number, y2: number, index: number, total: number) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
  
    const distance = Math.sqrt(dx * dx + dy * dy);
    const midPoint = distance / 2;
  
    const offsetPercentage = 0.2; // Adjust this value to move labels closer to or further from the midpoint
    const labelOffset = midPoint * offsetPercentage;
  
    const mx = x1 + (dx * (0.5 + (index - (total - 1) / 2) * offsetPercentage));
    const my = y1 + (dy * (0.5 + (index - (total - 1) / 2) * offsetPercentage));
  
    const perpOffset = 15; // Adjust this value to control the perpendicular offset of labels
    const perpX = -Math.sin(angle) * perpOffset;
    const perpY = Math.cos(angle) * perpOffset;
  
    return {
      x: mx + perpX,
      y: my + perpY
    };
  };

  const renderNodesAndEdges = () => {
    const warehouseX = 100;
    const supplierX = 400;
    const retailerX = 700;
    const yStep = 100;
    const nodes: JSX.Element[] = [];
    const edges: JSX.Element[] = [];
    const swEdges: { key: string; x1: number; y1: number; x2: number; y2: number; cost: number; isActive: boolean; isOptimal: boolean; isHighlighted: boolean }[] = [];
    const wrEdges: { key: string; x1: number; y1: number; x2: number; y2: number; cost: number; isActive: boolean; isOptimal: boolean; isHighlighted: boolean }[] = [];

    // Render warehouses first
    warehouseInventory.forEach((inventory, index) => {
      const y = (index + 1) * yStep;
      nodes.push(
        <Node 
          key={`w${index}`} 
          x={warehouseX} 
          y={y} 
          label={`W${index + 1}`} 
          inventory={inventory}
          isOptimal={warehouseToRetailerTransfers[index]?.some(transfer => transfer === 1)}
        />
      );
    });

    // Render suppliers
    supplierInventory.forEach((inventory, index) => {
      const y = (index + 1) * yStep;
      nodes.push(
        <Node 
          key={`s${index}`} 
          x={supplierX} 
          y={y} 
          label={`S${index + 1}`} 
          inventory={inventory}
          isOptimal={supplierToWarehouseTransfers[index]?.some(transfer => transfer === 1)}
        />
      );
    });

    // Render retailers (unchanged)
    retailerInventory.forEach((inventory, index) => {
      const y = (index + 1) * yStep;
      nodes.push(
        <Node 
          key={`r${index}`} 
          x={retailerX} 
          y={y} 
          label={`R${index + 1}`} 
          inventory={inventory}
          isOptimal={warehouseToRetailerTransfers.some(transfers => transfers[index] === 1)}
        />
      );
    });

    // Update supplier-to-warehouse edges
    supplierInventory.forEach((_, supplierIdx) => {
      warehouseInventory.forEach((_, warehouseIdx) => {
        const y1 = (supplierIdx + 1) * yStep;
        const y2 = (warehouseIdx + 1) * yStep;
        const isActive = supplierToWarehouseTransfers[supplierIdx]?.[warehouseIdx] === 1;
        
        swEdges.push({
          key: `sw-${supplierIdx}-${warehouseIdx}`,
          x1: supplierX,
          y1,
          x2: warehouseX,
          y2,
          cost: supplierToWarehouseCost[supplierIdx][warehouseIdx],
          isActive,
          isOptimal: isActive,
          isHighlighted: isActive && Math.floor(highlightIndex / 2) === 0
        });
      });
    });

    // Update warehouse-to-retailer edges
    warehouseInventory.forEach((_, warehouseIdx) => {
      retailerInventory.forEach((_, retailerIdx) => {
        const y1 = (warehouseIdx + 1) * yStep;
        const y2 = (retailerIdx + 1) * yStep;
        const isActive = warehouseToRetailerTransfers[warehouseIdx]?.[retailerIdx] === 1;
        
        wrEdges.push({
          key: `wr-${warehouseIdx}-${retailerIdx}`,
          x1: warehouseX,
          y1,
          x2: retailerX,
          y2,
          cost: warehouseToRetailerCost[warehouseIdx][retailerIdx],
          isActive,
          isOptimal: isActive,
          isHighlighted: isActive && Math.floor(highlightIndex / 2) === 1
        });
      });
    });

    // Render edges with calculated label positions
    swEdges.forEach((edge, index) => {
      const labelPos = calculateLabelPosition(
        edge.x1, 
        edge.y1, 
        edge.x2, 
        edge.y2, 
        index, 
        swEdges.length
      );
      
      edges.push(
        <Edge
          key={edge.key}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          cost={edge.cost}
          isActive={edge.isActive}
          isOptimal={edge.isOptimal}
          isHighlighted={edge.isHighlighted}
          labelX={labelPos.x}
          labelY={labelPos.y}
        />
      );
    });

    wrEdges.forEach((edge, index) => {
      const labelPos = calculateLabelPosition(
        edge.x1, 
        edge.y1, 
        edge.x2, 
        edge.y2, 
        index, 
        wrEdges.length
      );
      
      edges.push(
        <Edge
          key={edge.key}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          cost={edge.cost}
          isActive={edge.isActive}
          isOptimal={edge.isOptimal}
          isHighlighted={edge.isHighlighted}
          labelX={labelPos.x}
          labelY={labelPos.y}
        />
      );
    });

    return { nodes, edges };
  };

  const { nodes, edges } = renderNodesAndEdges();

  return (
    <div className="relative">
      <svg viewBox="0 0 800 450" className="w-full h-auto">
        <rect width="800" height="450" fill="#F3F4F6" />
        {edges}
        {nodes}
      </svg>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold">
          Total Cost: {fetchedData?.total_cost !== undefined ? fetchedData.total_cost : 'Calculating...'}
        </h3>
        <div className="text-sm text-gray-600 mt-2 space-y-1">
          {!fetchedData ? (
            <p>Fetching optimal solution...</p>
          ) : (
            <>
              <p>Optimal Bitstring: {fetchedData.optimal_bitstring}</p>
              <p>Solution found in {fetchedData.execution_time}ms</p>
            </>
          )}
        </div>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-green-400 rounded"></div>
          <span className="text-sm">Optimal Path</span>
        </div>
      </div>
      <div className="space-y-4 mt-6">
        <h2 className="text-xl font-bold">Results</h2>
        <p>Supplier to Warehouse Transfers: {JSON.stringify(supplierToWarehouseTransfers)}</p>
        <p>Warehouse to Retailer Transfers: {JSON.stringify(warehouseToRetailerTransfers)}</p>
        <p>Optimal Cost: {fetchedData?.total_cost !== undefined ? fetchedData.total_cost : 'Calculating...'}</p>
      </div>
    </div>
  );
};

const Node: React.FC<{ x: number; y: number; label: string; inventory: number; isOptimal: boolean }> = ({ 
  x, y, label, inventory, isOptimal 
}) => (
  <motion.g 
    initial={{ opacity: 0, scale: 0 }} 
    animate={{ opacity: 1, scale: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <circle 
      cx={x} 
      cy={y} 
      r="30" 
      fill={isOptimal ? "#34D399" : "#60A5FA"}
      className={isOptimal ? "animate-pulse" : ""}
    />
    <text x={x} y={y - 10} textAnchor="middle" fill="white" fontSize="12">{label}</text>
    <text x={x} y={y + 15} textAnchor="middle" fill="white" fontSize="10">Inv: {inventory}</text>
  </motion.g>
);

const Edge: React.FC<{ 
  x1: number; 
  y1: number; 
  x2: number; 
  y2: number; 
  cost: number; 
  isActive: boolean;
  isOptimal: boolean;
  isHighlighted: boolean;
  labelX: number;
  labelY: number;
}> = ({
  x1, y1, x2, y2, cost, isActive, isOptimal, isHighlighted, labelX, labelY
}) => (
  <motion.g 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.5 }}
  >
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      stroke={isOptimal ? "#34D399" : "#D1D5DB"}
      strokeWidth={isOptimal ? 3 : 1}
      strokeDasharray={isHighlighted ? "10,10" : "0,0"}
      className={isOptimal ? "animate-pulse" : ""}
    >
      {isHighlighted && (
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="20"
          dur="1s"
          repeatCount="indefinite"
        />
      )}
    </line>
    <rect
      x={labelX - 12}
      y={labelY - 8}
      width="24"
      height="16"
      fill="white"
      opacity="0.8"
      rx="4"
    />
    <text
      x={labelX}
      y={labelY + 4}
      textAnchor="middle"
      fill={isOptimal ? "#34D399" : "#6B7280"}
      fontSize="10"
      fontWeight={isOptimal ? "bold" : "normal"}
    >
      {cost}
    </text>
  </motion.g>
);



export default NetworkGraph;

