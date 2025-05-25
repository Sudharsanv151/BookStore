import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ onClose }) => {
    const navigate = useNavigate();

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                <h2 className="text-xl font-bold mb-4">Login Required</h2>
                <div className="flex justify-end">
                    <button
                        className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition duration-300 mr-2"
                        onClick={() => {
                            onClose();
                            navigate('/');
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPopup;
