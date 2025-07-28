# Deep Research Prompt: Drone Platform Capabilities Analysis

## Context: Platform Selection for Spantree's Solution

Spantree is building an enterprise drone solution for outdoor inventory management that requires:
- 24/7 autonomous operations ("drone-in-a-box")
- Ability to deploy custom AI models on edge devices
- Enterprise-grade reliability for Fortune 1000 clients
- Integration with existing systems (SAP, Oracle WMS)
- Support for professional services business model

While initially focusing on DJI Dock 3 and Matrice 4D, Spantree needs to understand the full landscape of enterprise drone platforms to make informed decisions about platform strategy, identify backup options, and understand competitive hardware choices.

## Research Objective
Conduct a comprehensive analysis of enterprise drone platforms, evaluating their technical capabilities, SDK features, and suitability for building custom vision AI solutions for inventory management. Focus on platforms that support professional services business models rather than consumer or hobbyist drones.

## Key Research Areas

### 1. DJI Enterprise Platforms
- **DJI Matrice Series** (300 RTK, 350 RTK)
- **DJI Mavic 3 Enterprise**
- **Phantom 4 RTK**
- SDK capabilities (Mobile SDK, Onboard SDK, Payload SDK)
- Integration with DJI FlightHub 2
- Third-party payload support
- Edge computing capabilities

### 2. Skydio Platforms
- **Skydio X2** series
- **Skydio Dock**
- Skydio Autonomy Engine
- SDK and API capabilities
- AI/ML integration options
- Remote operation features

### 3. Autel Robotics
- **EVO II Enterprise** series
- **Dragonfish** series
- SDK availability
- Integration capabilities
- Payload options

### 4. Platform Comparison Criteria
- **Flight Performance**: Range, battery life, weather resistance
- **Camera Systems**: Resolution, thermal options, zoom capabilities
- **SDK Features**: API completeness, documentation quality, community support
- **Edge Computing**: Onboard processing power, AI acceleration
- **Connectivity**: 4G/5G support, remote operation capabilities
- **Payload Flexibility**: Custom sensor support, weight capacity
- **Safety Features**: Obstacle avoidance, return-to-home, redundancy

### 5. Developer Ecosystem
- Available SDKs and their capabilities
- Programming language support
- Real-time data streaming options
- Cloud integration features
- Computer vision libraries compatibility
- Model deployment options

### 6. Integration Capabilities
- Fleet management software compatibility
- Enterprise system integration (ERP, asset management)
- Cloud platform support (AWS, Azure, GCP)
- Data export formats and APIs
- Compliance and security features

## Specific Technical Requirements

### Edge AI Capabilities
- Support for PyTorch models (.pth files)
- TensorFlow Lite compatibility
- ONNX runtime support
- Hardware acceleration (GPU, NPU, DSP)
- Model size and performance constraints
- Real-time inference capabilities

### Vision System Analysis
- Camera specifications and options
- Gimbal stabilization quality
- Multi-spectral imaging capabilities
- Thermal imaging integration
- LiDAR availability

### Autonomous Operation Features
- Waypoint mission planning
- Obstacle avoidance sophistication
- GPS-denied navigation
- Automated docking/charging
- Remote monitoring and control

## Output Requirements
1. Detailed comparison matrix of top 5 platforms
2. SDK capability assessment
3. Edge AI deployment options for each platform
4. Integration complexity analysis
5. Total cost of ownership estimates
6. Recommended platforms for different use cases