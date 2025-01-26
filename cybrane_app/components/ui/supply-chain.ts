export interface SupplyChainNode {
    id: string
    type: 'supplier' | 'warehouse' | 'retailer'
    inventory: number
  }
  
  export interface NetworkConfig {
    supplierToWarehouse: string[]
    warehouseToRetailer: string[]
    supplierInventory: string
    warehouseInventory: string
    retailerInventory: string
  }
  
  export interface TransferTable {
    from: string[]
    to: string[]
    transfers: boolean[][]
  }
  
  