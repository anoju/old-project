function displaymyAbbr() {
	//�������׽�Ʈ
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// ��� ��� ��� �´�
  var myAbbr = document.getElementsByTagName("abbr");
   //myAbbr������� �迭�� ����?
//alert(myAbbr.length)
  //myAbbr�� ����̸�?
  for(var i=0; i < myAbbr.length; i++){
	  //alert(myAbbr[i].nodeName)
	  }
  if (myAbbr.length < 1) return false;
  var myArray = new Array();
  
// �� ��� �ݺ��ؼ� �����´�
  for (var i=0; i<myAbbr.length; i++) {
	//��abbr��带 ������.. 
    var current_abbr = myAbbr[i];
	//alert(current_abbr)
	//��abbr��忡 ������ ��� �ִٸ� ��������Ų��
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
	//firstChild�� ����� ���� ������ �ٸ� �±׿� �ѹ��� ������ ���� �� �ֱ� ������
	//lastChild�� ����Ѵ�
	//<�±�><�±�>�̷��� ���̴�....</�±�></�±�c>
    var key = current_abbr.lastChild.nodeValue;
	//alert(key)
    myArray[key] = definition;
	//alert(myArray[key])
  }
// ���� ����� �����
  var dl = document.createElement("dl");
// �� ���Ǹ� �ݺ��ؼ� �����´�
  for (i in myArray) {
    var definition = myArray[i];
// ���� ������ �����
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(i);
    dtitle.appendChild(dtitle_text);
// ���� ������ �����
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);
// �̵��� ���� ��Ͽ� �߰��Ѵ�
    dl.appendChild(dtitle);
    dl.appendChild(ddesc);
  }
  if (dl.childNodes.length < 1) return false;
// ���� ����� ������ �����
  var header = document.createElement("h2");
  var header_text = document.createTextNode("���� ����");
  header.appendChild(header_text);
// ������ ������ �߰��Ѵ�
  document.getElementsByTagName("body")[0].appendChild(header);
// ���� ����� ������ �߰��Ѵ�
  document.getElementsByTagName("body")[0].appendChild(dl);
}
addLoadEvent(displaymyAbbr);