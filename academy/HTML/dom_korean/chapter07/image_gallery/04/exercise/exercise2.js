//Ÿ�ٿ�Ұ� �θ��� �������ڽ����� �Ǻ��Ѵ�
//���̸� ����Ҹ�appendChild�� �̿��Ͽ� ��Ҹ� ���δ�
//�����̸� ����Ҹ� Ÿ�ٰ� �θ��� �����ڽĻ��̿� �߰�
//�̰������ؼ��� insertBefore�� ����ؾ� �Ѵ�
window.onload = function(){
function insertAfter(newElement,targetElement) {
  var parent = targetElement.parentNode;
  if (parent.lastChild == targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement,targetElement.nextSibling);
  }
}
var newP = document.createElement("p");
 var pText = document.createTextNode("�ι�° ����ڿ� �߰��ȱ�");
  newP.appendChild(pText);
  var idMyInsert = document.getElementById("myInsert")
insertAfter(newP,idMyInsert)
}

