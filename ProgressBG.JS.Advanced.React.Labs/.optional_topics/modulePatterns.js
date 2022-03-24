const account = function () {
	// private members
	let _debit, _credit;

	function init(debit, credit) {
		_debit=debit;
		_credit=credit
	}

	function getDebit() {
		return _debit
	}

	function setDebit(value) {
		_debit=value;
	}

	return	{
		init,
		getDebit,
		setDebit
	}
}();
// console.dir(account);
account.init(100, 50);
console.log( account.getDebit() );
account.setDebit(90);
console.log( account.getDebit() );