/*�ܺηκи����ڵ�
//�������� �ε�ɶ�
window.onload = prepareLinks
function prepareLinks(){
	//���� �� ��� ��ũ�� �迭�� �����
	var links = document.getElementsByTagName("a");
	//�迭�� �ݺ��� �� ��ũ���� �˻��Ѵ�
	for (var i=0; i<links.length; i++) {
	//��ũ�� popup�Ƹ��� Ŭ������ ������ ������ ��ũ�� Ŭ�����θ� �˻��Ѵ�
    if (links[i].getAttribute("class") == "popup") {
	//Ŭ���Ǹ� ��ũ�� href�Ӽ����� popup�Լ��� ó���Ѵ�
      links[i].onclick = function() {
      popUp(this.getAttribute("href"));
	//��ũ�� ���� â���� �۵����� �ʵ��� �⺻������ ó������ �ʴ´�
      return false;
      }
    }
  }
}
function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480");
}*/

//����ȣȯ��üũ
//�ݹ��Լ����·� ����
window.onload = function() {
//getElementsByTagName�� �������� �ʴ´ٸ� �̺�Ʈ��������
  if (!document.getElementsByTagName) return false;
  var links = document.getElementsByTagName("a");
  for (var i=0; i<links.length; i++) {
    if (links[i].getAttribute("id") == "popup") {
      links[i].onclick = function() {
        popUp(this.getAttribute("href"));
        return false;
      }
    }
  }
}

function popUp(winURL) {
  window.open(winURL,"popup","width=320,height=480, scrollbars=no'");
}