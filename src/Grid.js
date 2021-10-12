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
} from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import useWindowSize from './useWindowSize';

const Grid = () => {
	const [width] = useWindowSize();
	const [datas, setDatas] = React.useState([]);
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
	// const validationRule = { required: true };
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
						//enablePersistence={true}
						showColumnChooser={true}
						filterSettings={filterOptions}
						toolbar={toolbarOptions}
						editSettings={editSettings}
						load={load}
						enableAdaptiveUI={width < 700 && true}
						rowRenderingMode={width < 700 && 'Vertical'}
					>
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
					<button onClick={downloadFile}>Export as json</button> <br />
					<button onClick={(e) => console.log('Async/Await with Backend')}>
						Sync with Server
					</button>
				</div>
			</div>
			<br></br>
		</div>
	);
};

export default Grid;
