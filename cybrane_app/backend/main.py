# from fastapi import FastAPI
# from typing import Dict, List
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# from qiskit_aer import AerSimulator
# from qiskit_optimization import QuadraticProgram
# from qiskit_optimization.algorithms import MinimumEigenOptimizer
# from qiskit_algorithms import QAOA
# from qiskit_algorithms.optimizers import COBYLA
# from qiskit_algorithms.utils import algorithm_globals
# from qiskit.primitives import Sampler
# from cost import simulate_cost_optimization
# from path import calculate_optimal_path_with_time
# from fastapi import FastAPI, HTTPException, Depends
# from pydantic import BaseModel



# from fastapi import FastAPI
# from typing import Dict
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# from cost import simulate_cost_optimization, decode_transfer_decisions
# from cost import calculate_total_cost

# app = FastAPI()

# # Add CORS middleware
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Change to specific origin if needed
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Global variable to store bitstrings
# bitstrings_data = {"optimal_bitstring": "", "bitstrings": {}}


# class OptimizationInput(BaseModel):
   
#     supplierToWarehouse: list
#     warehouseToRetailer: list
#     supplierInventory: list
#     warehouseInventory: list
#     retailerInventory: list

# @app.post("/api/path/optimal")
# async def optimize_path(input: OptimizationInput):
#     """
#     Runs the cost optimization and stores the results.
#     """
#     supplier_inventory = input.supplierInventory
#     warehouse_inventory = input.warehouseInventory
#     retailer_inventory = input.retailerInventory
#     supplier_to_warehouse_cost = input.supplierToWarehouse
#     warehouse_to_retailer_cost = input.warehouseToRetailer

#     # Simulate optimization
#     optimal_bitstring, counts = simulate_cost_optimization(
#         supplier_inventory, warehouse_inventory, retailer_inventory, 
#         supplier_to_warehouse_cost, warehouse_to_retailer_cost
#     )
    
#     # Decode the optimal bitstring
#     num_suppliers = len(supplier_inventory)
#     num_warehouses = len(warehouse_inventory)
#     num_retailers = len(retailer_inventory)
#     supplier_to_warehouse, warehouse_to_retailer = decode_transfer_decisions(
#         optimal_bitstring, num_suppliers, num_warehouses, num_retailers
#     )

#     # Calculate total cost
#     total_cost = calculate_total_cost(
#         supplier_to_warehouse, warehouse_to_retailer, 
#         supplier_to_warehouse_cost, warehouse_to_retailer_cost
#     )

#     # Store results in global variable
#     bitstrings_data["optimal_bitstring"] = optimal_bitstring
#     bitstrings_data["bitstrings"] = counts
#     bitstrings_data["total_cost"] = total_cost

#     return {
#         "optimal_bitstring": optimal_bitstring,
#         "bitstrings": counts,
#         "total_cost": total_cost
#     }


    

# @app.get("/api/path/optimal")
# async def fetch_bitstrings():
#     """
#     Fetches the bitstrings dictionary.
#     """
#     if not bitstrings_data["bitstrings"]:
#         return {"error": "No data available. Please run optimization first."}
#     total_cost = bitstrings_data.get("total_cost", "Cost not calculated")
#     return {"optimal_bitstring": bitstrings_data["optimal_bitstring"],"bitstrings": bitstrings_data["bitstrings"],"total_cost": total_cost}












# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# from typing import List, Optional
# from fastapi.middleware.cors import CORSMiddleware
# from path import calculate_optimal_path_with_time


# # Define the input model
# class OptimizationInputWithTime(BaseModel):
#     nodes: int
#     edges: List[List[int]]
#     edgeCosts: List[float]
#     edgeTimes: List[float]

# @app.post("/api/path/optimal_with_time")
# async def optimize_path_with_time(input: OptimizationInputWithTime):
#     """
#     Accepts a JSON payload, calculates the optimal path, and returns complete path information
#     including input parameters and optimization results.
#     """
#     nodes = input.nodes
#     edges = input.edges
#     edge_costs = input.edgeCosts
#     edge_times = input.edgeTimes

#     # Example optimization logic
#     result = calculate_optimal_path_with_time(nodes, edges, edge_costs, edge_times)

#     return {
#         "nodes": nodes,
#         "edges": edges,
#         "edge_costs": edge_costs,
#         "edge_times": edge_times,
#         "optimal_cost": result["optimal_cost"],
#         "selected_edges": result["selected_edges"],
#         "total_time": result["total_time"],
#     }



# import os
# from fastapi import FastAPI, HTTPException
# from pymongo import MongoClient
# from pydantic import BaseModel
# from dotenv import load_dotenv

# # Load environment variables
# load_dotenv()

# app = FastAPI()


# # Get MongoDB URI from .env
# MONGO_URI = os.getenv("MONGO_URI")
# if not MONGO_URI:
#     raise ValueError("MONGO_URI is not set in the .env file")

# # Connect to MongoDB
# client = MongoClient(MONGO_URI)
# db = client["business_db"]
# collection = db["profiles"]

# # Define Schema
# class BusinessProfile(BaseModel):
#     companyName: str
#     contactName: str
#     contactEmail: str
#     contactPhone: str
#     companyAddress: str
#     supplyChainRole: str

# @app.post("/create-profile")
# async def create_profile(profile: BusinessProfile):
#     result = collection.insert_one(profile.dict())
#     if not result.inserted_id:
#         raise HTTPException(status_code=500, detail="Failed to save data")
#     return {"success": True, "message": "Profile created successfully"}











# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)













































from fastapi import FastAPI, HTTPException
from typing import Dict, List, Optional
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from qiskit_aer import AerSimulator
from qiskit_optimization import QuadraticProgram
from qiskit_optimization.algorithms import MinimumEigenOptimizer
from qiskit_algorithms import QAOA
from qiskit_algorithms.optimizers import COBYLA
from qiskit_algorithms.utils import algorithm_globals
from qiskit.primitives import Sampler
from pymongo import MongoClient
from dotenv import load_dotenv
from cost import simulate_cost_optimization, decode_transfer_decisions, calculate_total_cost
from path import calculate_optimal_path_with_time
import os

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI(title="Supply Chain Optimization API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB setup
MONGO_URI = os.getenv("MONGO_URI")
if not MONGO_URI:
    raise ValueError("MONGO_URI is not set in the .env file")

mongodb_client = MongoClient(MONGO_URI)
db = mongodb_client["business_db"]
profiles_collection = db["profiles"]

# Global state for optimization results
optimization_state = {
    "optimal_bitstring": "",
    "bitstrings": {},
    "total_cost": None
}

# Pydantic models
class OptimizationInput(BaseModel):
    supplierToWarehouse: List[List[float]]
    warehouseToRetailer: List[List[float]]
    supplierInventory: List[int]
    warehouseInventory: List[int]
    retailerInventory: List[int]

class OptimizationInputWithTime(BaseModel):
    nodes: int
    edges: List[List[int]]
    edgeCosts: List[float]
    edgeTimes: List[float]

class BusinessProfile(BaseModel):
    companyName: str
    contactName: str
    contactEmail: str
    contactPhone: str
    companyAddress: str
    supplyChainRole: str

# Supply chain optimization endpoints
@app.post("/api/path/optimal")
async def optimize_path(input: OptimizationInput):
    """Optimize supply chain path and costs."""
    try:
        optimal_bitstring, counts = simulate_cost_optimization(
            input.supplierInventory,
            input.warehouseInventory,
            input.retailerInventory,
            input.supplierToWarehouse,
            input.warehouseToRetailer
        )
        
        # Decode results
        num_suppliers = len(input.supplierInventory)
        num_warehouses = len(input.warehouseInventory)
        num_retailers = len(input.retailerInventory)
        
        supplier_to_warehouse, warehouse_to_retailer = decode_transfer_decisions(
            optimal_bitstring, num_suppliers, num_warehouses, num_retailers
        )

        total_cost = calculate_total_cost(
            supplier_to_warehouse,
            warehouse_to_retailer,
            input.supplierToWarehouse,
            input.warehouseToRetailer
        )

        # Update global state
        optimization_state.update({
            "optimal_bitstring": optimal_bitstring,
            "bitstrings": counts,
            "total_cost": total_cost
        })

        return {
            "optimal_bitstring": optimal_bitstring,
            "bitstrings": counts,
            "total_cost": total_cost
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/path/optimal")
async def fetch_optimization_results():
    """Fetch the latest optimization results."""
    if not optimization_state["bitstrings"]:
        raise HTTPException(
            status_code=404,
            detail="No optimization data available. Please run optimization first."
        )
    return optimization_state

@app.post("/api/path/optimal_with_time")
async def optimize_path_with_time(input: OptimizationInputWithTime):
    """Optimize path considering both cost and time constraints."""
    try:
        result = calculate_optimal_path_with_time(
            input.nodes,
            input.edges,
            input.edgeCosts,
            input.edgeTimes
        )
        
        return {
            "nodes": input.nodes,
            "edges": input.edges,
            "edge_costs": input.edgeCosts,
            "edge_times": input.edgeTimes,
            "optimal_cost": result["optimal_cost"],
            "selected_edges": result["selected_edges"],
            "total_time": result["total_time"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Business profile endpoints
@app.post("/api/profiles")
async def create_profile(profile: BusinessProfile):
    """Create a new business profile."""
    try:
        result = profiles_collection.insert_one(profile.dict())
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to save profile")
        return {"success": True, "message": "Profile created successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    """Root endpoint with API information."""
    return {
        "message": "Supply Chain Optimization API",
        "version": "1.0",
        "endpoints": [
            "/api/path/optimal",
            "/api/path/optimal_with_time",
            "/api/profiles"
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)