$(document).ready(function (){
	//apabila tombol backspace diklik
    $("#backspace").click(function (){
        var tampilanValue = $("#tampilan").val();
        $("#tampilan").val(tampilanValue.substring(0, tampilanValue.length - 1));
    });
	
	//apabila tombol sama dengan dipilih
	$("#samadengan").click(function (){
		z1 = $("#tampilan").val();

		$("#riwayat").prepend("<br/>"+ z1);
	});
});

//fungsi hitung
function c(val){
	var a1 = $("#tampilan").val(val);
}

//buat ngambil data dari tombol
function v(val){
	var symbol = /\.|\+|\-|\*|\//
	var tampilanValue = $("#tampilan").val();
	var charTerakhir = tampilanValue.substring(tampilanValue.length, tampilanValue.length - 1);
	if (symbol.test(charTerakhir) && symbol.test(val)) {

	}else{
		var a2 = $("#tampilan").val($("#tampilan").val() + val);
	}
}

function samadengan(){
	$("#riwayat").prepend("=" + $("#tampilan").val())
	var a3 = c(eval($("#tampilan").val()))
}

function reset(){
	var a4 = $("#tampilan").val("");
}