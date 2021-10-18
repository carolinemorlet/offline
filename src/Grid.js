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

const Grid = ({ themeReducer, colorMode }) => {
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

	const filterOptions = { type: 'Excel' };

	const load = () => {
		// let adaptiveDlgTarget =
		// 	document.getElementsByClassName('e-mobile-content')[0];
	};

	const actionComplete = (args) => {
		if (args.requestType === 'save' || args.requestType === 'delete') {
			// Condition executes on Grid Add/Edit/Delete success
			// Grid export action can be performed here
			//	console.log(grid);
		}
	};

	const downloadFile = async () => {
		const fileName = 'ExportedData';
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

	const pageOptions = {
		pageSize: 8,
		pageSizes: true,
	};

	return (
		<div className='e-adaptive-demo e-bigger'>
			<div className='e-mobile-layout'>
				<div className='e-mobile-content' style={{ padding: '15px' }}>
					<GridComponent
						actionComplete={actionComplete}
						ref={(grid) => grid && setDatas(grid?.dataSource)}
						id='adaptivebrowser'
						dataSource={data}
						//height='100%'
						width='100%'
						allowFiltering={true}
						allowSorting={true}
						allowPaging={true}
						allowGrouping={true}
						allowReordering={true}
						allowResizing={true}
						//enablePersistence={true}
						showColumnChooser={true}
						filterSettings={filterOptions}
						toolbar={toolbarOptions}
						editSettings={editSettings}
						load={load}
						pageSettings={pageOptions}
						enableAdaptiveUI={width < 700 && true}
						rowRenderingMode={width < 700 && 'Vertical'}
					>
						<ColumnsDirective>
							<ColumnDirective
								field='OrderID'
								headerText='Order ID'
								isPrimaryKey={true}
							></ColumnDirective>
							<ColumnDirective
								field='CustomerID'
								headerText='Customer ID'
							></ColumnDirective>
							<ColumnDirective
								field='ShipName'
								headerText='ShipName'
							></ColumnDirective>
							<ColumnDirective
								field='ShipAddress'
								headerText='Ship Address'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCity'
								headerText='Ship City'
							></ColumnDirective>
							<ColumnDirective
								field='ShipCountry'
								headerText='Ship Country'
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
						<button
							className='btn_json'
							style={{ backgroundColor: colorMode && colorMode.split('-')[2] }}
							onClick={downloadFile}
						>
							Export data as json
						</button>{' '}
						<br />
						<button
							className='btn_server'
							onClick={(e) => console.log('Async/Await with Backend')}
							style={{ backgroundColor: colorMode && colorMode.split('-')[2] }}
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
