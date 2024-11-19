const Heading = () => {
    return(
        <div className='statistical-headings'>
            <h2>Advancd stactistics</h2>
            <p>Track how your links are performing accross the web with our Advanced statistics dashboard</p>
        </div>
    );
}
const StatisticalSection = () => {
    return (
        <div className='statistical-container'>
            <Heading />
            <div className='div1'>
                <h3><b>Brand recognition</b></h3>
                <p>Boost your brand recognition with each click, generic link don't mean a thing. branded links help install confidence in your content.</p>
            </div>
            <div className='div2'>
                <h3><b>Detailed Record</b></h3>
                <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps informs better decisions.</p>
            </div>
            <div className='div3'>
                <h3><b>Fully customizable</b></h3>
                <p>Improve brand awareness and the content discoverability through customizable links. Supercharging audiense engagement.</p>
            </div>
        </div>
    );
}
export default StatisticalSection;
