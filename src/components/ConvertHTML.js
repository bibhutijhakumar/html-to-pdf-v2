import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ConvertHTML = ({ showLineNumbers, props }) => {
	const [activeTab, setActiveTab] = useState('tab1');
	const [selectedFile, setSelectedFile] = useState(null);
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};
	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const [text, setText] = useState('');

	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
		<section class="convert-html row py-11 h-4/5">
			<div class="container w-3/5 m-auto">
				<h1 class="text-center">HTML to PDF</h1>
				<p className='text-center pb-2 mb-0'>Convert web pages or HTML files to PDF documents</p>
				<div className='mt-5'>
					<ul className="nav nav-tabs border-bottom-0">
						<li className="nav-item">
							<button
								className={`text-dark nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
								onClick={() => handleTabClick('tab1')}
							>
								Convert URL to PDF
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`text-dark nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
								onClick={() => handleTabClick('tab2')}
							>
								Convert HTML files
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`text-dark nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
								onClick={() => handleTabClick('tab3')}
							>
								HTML code
							</button>
						</li>
					</ul>
					<div className="tab-content bg-white h-25 min-h-20 p-5">
						<div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`} id="tab1Content">
							<div className="d-flex flex-column gap-4">
								<h2>Web	addresses:</h2>
								<textarea class="w-100 border rounded p-3" rows={5} placeholder='Paste your URLs here, one per line:
    		https://www.example.com/
    		https://www.google.com/'></textarea>
							</div>

						</div>
						<div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`} id="tab2Content">
							<div className="text-center">
								<div className={`mb-3 ${selectedFile ? 'file-selected' : 'd-none'}`}>
									<span className='text-xl'>Selected:</span> {selectedFile ? selectedFile.name : 'No file selected'}
								</div>
								<div className='bg-btn-success rounded m-auto position-relative w-content'>
									<input className='opacity-0 position-absolute w-100 h-100' type="file" onChange={handleFileChange} />
									<h4 className='w-content bg-btn-primary rounded text-white border-0 hover-shadow p-3'>Upload HTML Files</h4>
								</div>
							</div>
						</div>
						<div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`} id="tab3Content">
							<div className="text-left">
								<h3 className='text-xl mb-4'>HTML Code:</h3>
								<div className="textarea-container h-96 mb-5" >
									<div className="relative h-full w-full flex justify-start"
										data-te-perfect-scrollbar-init
										data-te-suppress-scroll-x="true"
									>
										<textarea
											id="journal-scroll"
											value={text}
											onChange={handleChange}
											placeholder="Type your text here..."

											className='w-100 h-500 border p-4 rounded-lg'
										/>
									</div>

								</div>

								<div className='d-flex justify-center gap-4'>
									<button className="w-content bg-btn-primary rounded text-white border-0 hover-shadow p-3">Convert HTML to PDF</button>
									<button className="w-content bg-btn-primary rounded text-white border-0 hover-shadow p-3">More options</button></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConvertHTML