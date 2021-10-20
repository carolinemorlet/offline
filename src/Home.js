import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
} from '@syncfusion/ej2-react-grids';
import {
	Edit,
	EditSettingsModel,
	ExcelExport,
	Filter,
	Group,
	Inject,
	Page,
	PageSettingsModel,
	PdfExport,
	Search,
	Toolbar,
	ToolbarItems,
} from '@syncfusion/ej2-react-grids';
import React, { useRef, useState } from 'react';
import { employeeData } from './data';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

let readString = '';

const template = (props) => {
	const src = props.Image;
	return (
		<div style={{ height: '55px', width: '55px' }}>
			<img src={src} alt={props.Image} style={{ width: '80%' }} />
		</div>
	);
};

const uploadPath = {
	removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
	saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
};

function Home() {
	const begin = (props) => {
		if (props.requestType === 'save') {
			props.data.Image = readString;
			setIconFileName(
				document.getElementsByClassName('e-upload')[0].nextElementSibling
					.innerText
			);
		}
	};
	const onUploadSuccess = (props) => {
		document.getElementsByClassName(
			'e-upload'
		)[0].nextElementSibling.innerText = props.file.name;
		if (props.operation === 'upload') {
			// Raw file of the uploaded image is retrieved
			const file = props.file.rawFile;
			// File reader is initialized and the raw file is read as URL
			const reader = new FileReader();
			reader.readAsDataURL(file);
			// The base64 result is retrieved on load success
			// This value is stored in global variable and returned in the read function of the cell edit template
			reader.onload = () => {
				console.log(reader.result);
				readString = reader.result;
			};
			reader.onerror = (error) => {
				console.log('Error: ', error);
			};
		}
	};

	const editTemplate = (props) => {
		return (
			<div>
				<UploaderComponent
					id='uploader'
					autoUpload={true}
					multiple={false}
					asyncSettings={uploadPath}
					allowedExtensions='.png'
					success={onUploadSuccess}
				/>
				<p>{iconFileName}</p>
			</div>
		);
	};

	const gridRef = useRef(null);
	const [iconFileName, setIconFileName] = useState('Initial value');
	const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Search'];
	const editOptions = {
		allowEditing: true,
		allowAdding: true,
		allowDeleting: true,
		mode: 'Normal',
	};

	const pageSettings = { pageSize: 6 };
	return (
		<div>
			{' '}
			<GridComponent
				dataSource={employeeData}
				ref={gridRef}
				allowPaging={true}
				pageSettings={pageSettings}
				editSettings={editOptions}
				actionBegin={begin}
				toolbar={toolbarOptions}
			>
				<ColumnsDirective>
					<ColumnDirective
						field='OrderID'
						isPrimaryKey={true}
						width='100'
						textAlign='Left'
					/>
					<ColumnDirective field='CustomerID' width='100' textAlign='Left' />
					<ColumnDirective field='CustomerName' width='100' textAlign='Left' />
					<ColumnDirective
						field='Image'
						template={template}
						editTemplate={editTemplate}
						width='100'
						textAlign='Left'
					/>
				</ColumnsDirective>
				<Inject
					services={[
						Page,
						PdfExport,
						Filter,
						Group,
						Edit,
						ExcelExport,
						Search,
						Toolbar,
					]}
				/>
			</GridComponent>
		</div>
	);
}

export default Home;
