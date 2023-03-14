import CustomerSupportForm from "../../components/CustomerSupportForm/CustomerSupportForm";

const data = [];


const CustomerSupportPage = () => {
    return (
    <div>
        <CustomerSupportForm savedForm={data}/>
    </div>
    )
}



export default CustomerSupportPage;