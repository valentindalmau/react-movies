import Image from 'react-bootstrap/Image';
function Welcome() {
    return (
        <div className="p-5 pt-3">
            <div className="text-center">
                <Image src="/fondo.jpg" className='img-fluid w-75 h-75' fluid />
            </div>
        </div>
    );
}

export default Welcome;
