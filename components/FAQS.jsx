import React from 'react';
import FAQ from './FAQ'; 

const FAQs = () => {

        const faqs =[
        {
            q:"How does your online platform contribute to the UN's goal of better health and well-being?",
            a:"Our platform contributes to the UN's goal by providing comprehensive remote healthcare services. We enhance communication between patients and healthcare providers, enabling symptom checks, appointment booking, video consultations, prescription management, tailored healthcare plans, and emergency support. Additionally, our platform can raise funds for broader healthcare causes, further supporting global health initiatives."
        },
        {
            q:"What specific features does your online platform offer?",
            a:"Our platform offers a wide range of features to facilitate remote healthcare. These include a symptom checker to assess health conditions, appointment booking for scheduling consultations, secure video consultations for virtual medical visits, prescription management tools, personalized health plans tailored to individual needs, and access to emergency support services.",
        },
        {
            q:" How does your platform address obstacles like distance and lack of resources in accessing medical care?",
            a:" Our platform leverages technology to overcome barriers to healthcare access. By providing remote healthcare services, we eliminate the need for individuals to travel long distances to access medical care. Additionally, our platform ensures that individuals in underserved areas have access to timely and comprehensive medical attention, regardless of geographical location or resource constraints.",
        },
        {
            q:" Is your platform user-friendly and accessible to individuals with limited technological skills?",
            a:"Yes, our platform is designed to be user-friendly and accessible to individuals of all technological skill levels. We prioritize intuitive interface design and provide clear instructions to guide users through the platform's features. Additionally, our customer support team is available to assist users who may require additional assistance or guidance.",
        },
        {
            q:"What impact do you hope to achieve with your online platform?",
            a:"Our ultimate goal is to improve access to quality healthcare, encourage preventive care, and improve global health outcomes through our online platform. By empowering individuals to take control of their health and providing convenient access to medical care, we aim to make a meaningful impact on public health and contribute to the promotion of global well-being.",
        }
    ]
    
    
    
    return (
        <div className="max-w-6xl mx-auto mt-8 mb-8">
        <h1 className="aboutus text-3xl font-bold mb-4">
            <span>Frequently&nbsp;&nbsp;</span>
            <span> Asked&nbsp;&nbsp;</span>
            <span> Questions</span>
        </h1>
            {
                faqs.map((faq) => (
                    <FAQ question={faq.q} answer={faq.a}/>
                ) )
            }
        </div>
    );
};

export default FAQs;
