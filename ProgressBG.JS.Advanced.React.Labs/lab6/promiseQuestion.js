function getColumns() {
	return new Promise((resolve, reject) => {
		let columns = {};
		console.log("SELECT COLUMN_NAME as columns FROM information_schema.COLUMNS WHERE TABLE_SCHEMA='db_name' AND TABLE_NAME='table_name';");
		flagAlter = true;
		return resolve(columns);
	});
}

function addColumn() {
	return new Promise((resolve, reject) => {
		console.log("ALTER TABLE db_name.table_name ADD COLUMN `new_column` decimal(11,3) default 0 AFTER `column` ");
		flagSelect = true
		return resolve(null);
	});
}

// very, very ugly workaround!!!
let flagAlter = false;
let flagSelect = false;

for (var i = 0; i < 8; ++i) {
	// трябва да си поиграеш с условието...
	if (flagAlter){
		break;
	}
	console.log('EXECUTED!');
	execute()

}

function execute() {
	return new Promise((resolve, reject) => {
		getColumns().then(() => {
			addColumn()
			.then(() => resolve(null))
			.catch(error => {
				log.error(error);
				return reject(error);
			});
		}).catch(error => {
			log.error(error);
			return reject(error);
		})
	})
}