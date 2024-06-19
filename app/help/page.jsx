
import { currentUser } from '@clerk/nextjs';
import FAQs from '../../components/FAQS';



const Help = async () => {
    const user = await currentUser();
    
    return ( 
        <FAQs username={user.username} />
    );
}

export default Help;