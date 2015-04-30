/--------------- this is the module that makes all calculations--------------/


tmpPm = 0;
savedStrings = "-------PRINTED STRINGS------";

exports.add = function (num , tmp_ply){
	tmp_ply.pm += num;

};

exports.sub = function (num , tmp_ply){
	tmpPm = tmp_ply.pm;
	if ((tmp_ply.pm) - num > 0) {
	tmp_ply.pm -= num;

	}
};

exports.displayAdd = function (tmp_ply){
	console.log(tmp_ply.name + ' new stats is: ' + tmp_ply.pm);
	savedStrings += ("\n" + tmp_ply.name + ' new stats is: ' + tmp_ply.pm);

};

exports.displaySub = function (tmp_ply){
	if (tmpPm != tmp_ply.pm){ 
	console.log(tmp_ply.name + ' new stats is: ' + tmp_ply.pm);
	savedStrings += ("'\n'" + tmp_ply.name + ' new stats is: ' + tmp_ply.pm);

	}
	else {
			console.log('Cant go under 0!!!')
			savedStrings += ("\n" + 'Cant go under 0!!!');
	}
};



