/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */


/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stuDBName = "studentdb";
var sturelname = "studentdata";
var contoken = "90932570|-31949277772558439|90949367";

$("studentrn").focus();
function saverecno(jsonobj) {
    var lvdata = JSON.parse(jsonobj.data);
    localStorage.setItem("recno", lvdata.rec_no);

}
function getstudentrnasjsonobj() {
    var studentrn = $('#studentrn').val();
    var jsonStr = {
        Studentrn: studentrn
    };
    return JSON.stringify(jsonStr);
}

function filldata(jsonobj) {
    saverecno(jsonobj);
    var data = JSON.parse(jsonobj.data).record;
    $('#studentname').val(data.Studentname);
    $('#studentclass').val(data.Studentclas);
    $('#studentdob').val(data.Studentdob);
    $('#studentaddr').val(data.Studentaddr);
    $('#studentdoe').val(data.Studentdoe);

}

function validatedata() {
    var rn, studentname, studentdob, studentclass, studentdoe, studentaddr;
    rn = $('#studentrn').val();
    studentname = $('#studentname').val();
    studentclass = $('#studentclass').val();
    studentdob = $('#studentdob').val();
    studentaddr = $('#studentaddr').val();
    studentdoe = $('#studentdoe').val();

    if (rn === '') {
        alert('Student ID is missing');
        $('#studentrn').focus();
        return '';
    }
    if (studentname === '') {
        alert('Student Name is missing');
        $('#studentname').focus();
        return '';
    }
    if (studentclass === '') {
        alert('Student Class is missing');
        $('#studentclass').focus();
        return '';
    }
    if (studentdob === '') {
        alert('Student DOB is missing');
        $('#studentdob').focus();
        return '';
    }
    if (studentaddr === '') {
        alert('Student Address is missing');
        $('#studentaddr').focus();
        return '';
    }
    if (studentdoe === '') {
        alert('Student Enrollment date is missing');
        $('#studentdoe').focus();
        return '';
    }
    var jsonstrobj = {
        Studentrn: rn,
        Studentname: studentname,
        Studentclas: studentclass,
        Studentdob: studentdob,
        Studentaddr: studentaddr,
        Studentdoe: studentdoe
    };
    return JSON.stringify(jsonstrobj);
}

function getstu()
{
    var sturnjsonobj = getstudentrnasjsonobj();
    var getrequest = createGET_BY_KEYRequest(contoken, stuDBName, sturelname, sturnjsonobj);
    jQuery.ajaxSetup({async: false});
    var resjsonobj = executeCommandAtGivenBaseUrl(getrequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});
    if (resjsonobj.status === 400) {
        $('#save').prop("disabled", false);
        $('#reset').prop("disabled", false);
        $('#studentname').focus();
    } else if (resjsonobj.status === 200)
    {
        $('#studentrn').prop("disabled", true);
        filldata(resjsonobj);
        $('#change').prop("disabled", false);
        $('#reset').prop("disabled", false);
        $('#studentname').focus();
    }
}
function resetform() {
    $('#studentrn').val("");
    $('#studentname').val("");
    $('#studentclass').val("");
    $('#studentdob').val("");
    $('#studentaddr').val("");
    $('#studentdoe').val("");
    $('#studentrn').prop("disabled", false);
    $('#save').prop("disabled", true);
    $('#change').prop("disabled", true);
    $('#reset').prop("disabled", true);
    $('#studentrn').focus();
}
function savedata()
{
    var jsonstrobj = validatedata();
    if (jsonstrobj === '')
    {
        return '';
    }
    var putRequest = createPUTRequest(contoken, jsonstrobj, stuDBName, sturelname);
    jQuery.ajaxSetup({async: false});
    var resjsonobj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetform();
    $('#studentrn').focus();
}

function changedate() {
    $('#change').prop("disabled", true);
    jsonchange = validatedata();
    var updaterequest = createUPDATERecordRequest(contoken, jsonchange, stuDBName, sturelname, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resjsonobj = executeCommandAtGivenBaseUrl(updaterequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    console.log(resjsonobj);
    resetform();
    $('#studentrn').focus();
}
