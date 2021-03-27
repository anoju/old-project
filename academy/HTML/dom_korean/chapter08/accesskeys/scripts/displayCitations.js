function displayCitations() {
	//�������˻�
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
// ��� blockquotes ��Ҹ� �����´�
  var quotes = document.getElementsByTagName("blockquote");
// �ݺ����� ���� �����͸� �����Ѵ�
  for (var i=0; i<quotes.length; i++) {
// cite �Ӽ��� ������ �ݺ����� �ٽ� �Ѵ�
    if (!quotes[i].hasAttribute("cite")) continue;
// cite �Ӽ��� �����Ѵ�
    var url = quotes[i].getAttribute("cite");
// blockquote �� ��� ��� ��带 �����´�
    var quoteChildren = quotes[i].getElementsByTagName('*');
// ���� ��� ��尡 ������ �ݺ����� �ٽ� �Ѵ�
    if (quoteChildren.length < 1) continue;
// blockquote �� ���� ������ ��� ��带 �����´� 
    var elem = quoteChildren[quoteChildren.length - 1];
// ��ũ���� �����
    var link = document.createElement("a");
    var link_text = document.createTextNode("��ó����");
    link.appendChild(link_text);
    link.setAttribute("href",url);
    var superscript = document.createElement("sup");
    superscript.appendChild(link);
// ��ũ���� blockquote�� ������ ��� ��� �ڿ� �߰��Ѵ�.
    elem.appendChild(superscript);
  }
}
addLoadEvent(displayCitations);