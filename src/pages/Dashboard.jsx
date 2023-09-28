import React, { useState, useEffect } from 'react';
import TopSection from '../components/TopSection/TopSection';
import { FaSearch, FaRegBell } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import DshCard from '../components/ProjectCard/Card/Card';
import * as Data from '../Data/projects.jsx'
import * as DashInfo from '../Data/DashboardInfo'
import { Container } from 'react-bootstrap';
import InfoCard from '../components/ProjectCard/InfoCard/InfoCard';
import HeaderList from "../components/HeaderProectList/HeaderList";
const Dashboard = () => {
   
    const [infoData, setInfoData] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setInfoData(DashInfo.DashInfo);
        setProjects(Data.Projects);
    }, [infoData, projects]);

    return (
        <div className=''>
            {/* /////////////////////////////Top Header Start///////////////////////////// */}
            <TopSection headerName='Your dashboard' icon1=<FaSearch /> icon2=<FaRegBell /> />
            {/* /////////////////////////////Top Header End///////////////////////////// */}

            {/* /////////////////////////////Dashboard Info Start///////////////////////////// */}
            {infoData.length && <Container>
                <Row xs={1} md={3} className="g-4">
                    {infoData.map((info, idx) => (
                        <InfoCard idx={idx} info={info} />
                    ))}
                </Row>
            </Container>}
            {/* /////////////////////////////Dashboard Info End///////////////////////////// */}

            {/* /////////////////////////////Header List Start///////////////////////////// */}
            <HeaderList />
            {/* /////////////////////////////Header List End///////////////////////////// */}

            {/* /////////////////////////////Project List Start///////////////////////////// */}
            <Container>
                {projects.length && <Row xs={1} md={3} className="g-4">
                    {projects.map((project, idx) => (
                        <DshCard project={project} key={idx} />
                    ))}
                </Row>}
            </Container>
            {/* /////////////////////////////Project List End///////////////////////////// */}

        </div>
    );
};

export default Dashboard;