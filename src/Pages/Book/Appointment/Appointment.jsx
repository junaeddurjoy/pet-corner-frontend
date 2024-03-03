import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useTreatment from '../../../hooks/useTreatment';
import BookTab from '../BookTab/BookTab';
import { useParams } from 'react-router-dom';

const Appointment = () => {
    const categories = ['all' , 'cat' , 'dog' , 'bird' , 'other' ]
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [service] = useTreatment();

    const cat = service.filter(item => item.pet === "cat");
    const dog = service.filter(item => item.pet === "dog");
    const bird = service.filter(item => item.pet === "bird");
    const other = service.filter(item => item.pet === "other");

    return (
        <div>
            <Helmet>
                <title>Pet Corner | Book Appointments</title>
            </Helmet>
            <Cover img={'https://images.jdmagicbox.com/comp/villupuram/q7/9999p4146.4146.140706162137.d7q7/catalogue/dr-a-selvaraj-varanjaram-villupuram-veterinary-doctors-udfsxekwui.jpg'} title={'Book Appointment'} description={'Get Your Pet To A Certified Veterinarian Now'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>All</Tab>
                    <Tab>Cat</Tab>
                    <Tab>Dog</Tab>
                    <Tab>Bird</Tab>
                    <Tab>Other</Tab>
                </TabList>
                <TabPanel>
                    <BookTab items={service}></BookTab>
                </TabPanel>
                <TabPanel>
                    <BookTab items={cat}></BookTab>
                </TabPanel>
                <TabPanel>
                    <BookTab items={dog}></BookTab>
                </TabPanel>
                <TabPanel>
                    <BookTab items={bird}></BookTab>
                </TabPanel>
                <TabPanel>
                    <BookTab items={other}></BookTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Appointment;