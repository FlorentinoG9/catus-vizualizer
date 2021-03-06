import Image from 'next/image';
import MaterialProvider from '../contexts/MaterialContext';

Image;
export default function Home() {
	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen backdrop-blur-sm'>
			<div className='absolute'>
				<Image
					src='https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844'
					width={1250}
					height={885}
					priority
				/>
        <MaterialProvider>
          
        </MaterialProvider>
			</div>
		</div>
	);
}
