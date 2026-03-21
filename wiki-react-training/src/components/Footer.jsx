function Footer({teamName}) {
    return (
        <div className='footer'>
            <div className='foot'>
            <h1 className='team'>{teamName}</h1>
            <h3 className='label'>Synthetic Biology Project Team</h3>
            <p className='copyright'>@ 2025 Cornell iGEM Project Team</p>
            </div>
        </div>
    );
}
export default Footer;