import banner from '../assets/home/banner.jpg';

const CoverBanner = ({ title, dec }) => {
    return (
        <div className="flex bg-fixed justify-center items-center py-28 rounded-xl"  style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="bg-white px-16 py-12 rounded-2xl">
                <h4 className="text-4xl text-center font-semibold">{title}</h4>
                <p className="text-xl text-center font-medium">{dec}</p>
            </div>
        </div>
    );
};

export default CoverBanner;
