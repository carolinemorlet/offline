import {
	GridComponent,
	Inject,
	Filter,
	Sort,
	Edit,
	Toolbar,
	Page,
	Group,
	Reorder,
	Resize,
	ColumnChooser,
	ColumnDirective,
	ColumnsDirective,
} from '@syncfusion/ej2-react-grids';
import { useState } from 'react';
import { data } from './datasource';
import useWindowSize from './useWindowSize';

const Grid = () => {
	const [width] = useWindowSize();
	const [datas, setDatas] = useState(data);

	const editSettings = {
		allowEditing: true,
		allowAdding: true,
		allowDeleting: true,
		mode: 'Dialog',
	};

	const toolbarOptions = [
		'Add',
		'Edit',
		'Delete',
		'Update',
		'Cancel',
		'ColumnChooser',
		'Search',
	];
	//const validationRule = { required: true };
	// const orderidRules = { required: true, number: true };
	const filterOptions = { type: 'Excel' };
	//const grid = GridComponent;
	const load = () => {
		// let adaptiveDlgTarget =
		// 	document.getElementsByClassName('e-mobile-content')[0];
	};
	// const menuFilter = { type: 'Menu' };
	// const checkboxFilter = { type: 'CheckBox' };

	// Grid’s actionComplete event handler
	const actionComplete = (args) => {
		if (args.requestType === 'save' || args.requestType === 'delete') {
			// Condition executes on Grid Add/Edit/Delete success
			// Grid export action can be performed here
			//	console.log(grid);
		}
	};

	const downloadFile = async () => {
		const fileName = 'file';
		const json = JSON.stringify(datas);
		const blob = new Blob([json], { type: 'application/json' });
		const href = await URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = href;
		link.download = fileName + '.json';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className='e-adaptive-demo e-bigger'>
			<div className='e-mobile-layout'>
				<div className='e-mobile-content'>
					<GridComponent
						actionComplete={actionComplete}
						ref={(grid) => grid && setDatas(grid?.dataSource)}
						id='adaptivebrowser'
						dataSource={data}
						height='100%'
						width='100%'
						allowFiltering={true}
						allowSorting={true}
						allowPaging={true}
						allowGrouping={true}
						allowReordering={true}
						allowResizing={true}
						enablePersistence={true}
						showColumnChooser={true}
						filterSettings={filterOptions}
						toolbar={toolbarOptions}
						editSettings={editSettings}
						load={load}
						enableAdaptiveUI={width < 700 && true}
						rowRenderingMode={width < 700 && 'Vertical'}
					>
						{/* <ColumnsDirective>
							<ColumnDirective
								field='SNO'
								headerText='SNO'
								width='150'
								isPrimaryKey={true}
								//validationRules={orderidRules}
							></ColumnDirective>
							<ColumnDirective
								field='Model'
								headerText='Model Name'
								width='200'
								editType='defaultEdit'
								//validationRules={validationRule}
							/>

							<ColumnDirective
								field='ReleaseDate'
								headerText='Released Date'
								// editType='datepickeredit'
								// type='date'
								// format='yMMM'
								width='200'
							></ColumnDirective>
							<ColumnDirective
								field='Developer'
								headerText='Developer'
								width='200'
								//filter={menuFilter}
								//validationRules={validationRule}
							></ColumnDirective>
							<ColumnDirective
								field='AndroidVersion'
								headerText='Android Version'
								width='200'
								//filter={checkboxFilter}
								validationRules={validationRule}
							></ColumnDirective>
						</ColumnsDirective> */}
						<ColumnsDirective>
							<ColumnDirective
								field='OrderID'
								headerText='Order ID'
								width='40'
								textAlign='Right'
								isPrimaryKey={true}
							></ColumnDirective>
							<ColumnDirective
								field='CustomerID'
								headerText='Customer ID'
								width='40'
								textAlign='Right'
								isPrimaryKey={true}
							></ColumnDirective>
							<ColumnDirective
								field='ShipName'
								headerText='ShipName'
								width='50'
							></ColumnDirective>
							<ColumnDirective
								field='ShipAddress'
								headerText='Ship Address'
								width='50'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCity'
								headerText='Ship City'
								width='50'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCountry'
								headerText='Ship Country'
								width='50'
							></ColumnDirective>
						</ColumnsDirective>
						<Inject
							services={[
								Filter,
								Sort,
								Edit,
								Toolbar,
								Page,
								Group,
								Reorder,
								Resize,
								ColumnChooser,
							]}
						/>
					</GridComponent>
					<br />
					<div className='btn'>
						<button className='btn_json' onClick={downloadFile}>
							Export data as json
						</button>{' '}
						<br />
						<button
							className='btn_server'
							onClick={(e) => console.log('Async/Await with Backend')}
						>
							Sync with Server
						</button>
					</div>
				</div>
			</div>
			<br></br>
		</div>
	);
};

export default Grid;
