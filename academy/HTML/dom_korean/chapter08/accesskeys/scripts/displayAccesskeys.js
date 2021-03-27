function displayAccesskeys() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// ���� �� ��� ��ũ�� ã�´�
  var links = document.getElementsByTagName("a");
// ����Ű�� ������ �迭�� �����
  var akeys = new Array();
// ������ ��ũ�� �ݺ��Ѵ�
  for (var i=0; i<links.length; i++) {
    var current_link = links[i];
// accesskey�Ӽ� ���� ������ �ݺ��� ����Ѵ�
    if (current_link.getAttribute("accesskey") == null) continue;
// accesskey ���� �����´�
    var key = current_link.getAttribute("accesskey");
// ��ũ �ؽ�Ʈ ���� �����´�
    var text = current_link.lastChild.nodeValue;
// �� ���� �迭�� �����Ѵ�

    akeys[key] = text;
	alert(akeys[key])
  }
// ����� �����
  var list = document.createElement("ul");
// ������ ����Ű���� �ݺ��Ѵ�
  for (i in akeys) {
    var text = akeys[i];
//  ��� �׸� ���� ���ڿ��� �����
    var str = i + " : "+text;
// ��� �׸��� �����Ѵ�
    var item = document.createElement("li");
    var item_text = document.createTextNode(str);
    item.appendChild(item_text);
// ��Ͽ� ����׸��� �߰��Ѵ�
    list.appendChild(item);
  }
// ������ �����
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Accesskeys");
  header.appendChild(header_text);
// ������ ������ �߰��Ѵ�
  document.body.appendChild(header);
// ����� ������ �߰��Ѵ�
  document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);