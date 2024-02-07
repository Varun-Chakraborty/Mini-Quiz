import Questions from './components/questionBlock';

export default function App() {
	return (
		<div className='h-screen w-screen bg-blue-200 flex justify-center items-center'>
			<div className='border-2 border-blue-400 h-1/2 w-1/2 rounded-2xl bg-blue-300 py-4 flex flex-col justify-between items-center'>
				<Questions />
			</div>
		</div>
	);
}