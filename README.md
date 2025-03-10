# Cybranex-Supplychain-Optimization

## Overview

This project aims to optimize supply chain logistics using quantum computing techniques. It consists of two main optimization approaches:

- **Optimal Path Calculation** - Uses Qiskit's `QuadraticProgram` and `QAOA` algorithm to find the shortest and most cost-effective path in the supply chain.
- **Inventory and Cost Optimization Circuit** - Employs quantum circuits to encode and optimize supplier-to-warehouse and warehouse-to-retailer cost distributions using QFT (Quantum Fourier Transform).

The project is integrated into a **Next.js web application**, where users can:

- Set up their business profile.
- Input supply chain parameters.
- View optimized results and visualizations.

---

## Features

### Quantum Path Optimization:
- Utilizes Qiskit's `QuadraticProgram` and `MinimumEigenOptimizer` for optimal path finding.
- Ensures valid flow from suppliers to retailers with cost minimization.

### Quantum Cost Optimization Circuit:
- Encodes cost distributions using quantum circuits.
- Simulates quantum circuits using Qiskit's `AerSimulator`.

### Next.js Web Interface:
- User-friendly input forms for supply chain parameters.
- Dynamic result visualizations.

---

