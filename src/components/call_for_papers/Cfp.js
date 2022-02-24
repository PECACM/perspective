import * as React from 'react';
import Dropdown from 'react-multilevel-dropdown';
import { Typography} from "@mui/material";

function Cfp() {
  return (
    <div>
        <Dropdown
            title='Call for Papers'
            >
            <Dropdown.Item>
                <Typography variant=''>
                    Computing
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Hight Performance Computing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Distributed and Parallel Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Cloud Computing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Edge Computing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Fog Computing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Human-Centred Computing
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
            <Typography variant=''>
                    Artificial Intelligence
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Fuzzy Logic
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Expert Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Agents and MultiAgent Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Computational Optimization
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Bio-inspired algorithms
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
                <Typography variant=''>
                    Machine Learning
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Deep Learning
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Nueral Networks
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Natural Language Processing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Data Mining
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Data Science
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            GANs
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
                <Typography variant=''>
                    Software Engineering
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Recommender Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Semantic Web Analysis
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
                <Typography variant=''>
                    Machine Vision
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Human Computer Interacton
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Computer Vision
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Image and Video Processing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Medical Diagnosis
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Augmented Reality
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Virtual Reality
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
                <Typography variant=''>
                    Communication
                </Typography>
                <Dropdown.Submenu>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Networking
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Wireless and Mobile Communication
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Signal Processing
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Internet of Things
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Cyber physical Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Wireless Sensor Systems
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Industry 4.0
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Security And Privacy
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Biometric Security
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Cybersecurity
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
            <Dropdown.Item>
                <Typography variant=''>
                    Futuristic Applications
                </Typography>
                <Dropdown.Submenu>
                <Dropdown.Item>
                        <Typography variant=''>
                           Sustainable cities and Societies
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Smart grids and Energy Networks
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Ambient Assisted Living
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Smart HealthCare
                        </Typography>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Typography variant=''>
                            Intelligent Transportation Systems
                        </Typography>
                    </Dropdown.Item>
                </Dropdown.Submenu>
            </Dropdown.Item>
        </Dropdown>
    </div>
  )
}

export default Cfp