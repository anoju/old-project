<%
date_ju1 = right(replace(date,"-",""),8) 
set_hour = hour(now)
if len(set_hour) = 1 then set_hour = "0" & set_hour
set_minute = minute(now)
if len(set_minute) = 1 then set_minute = "0" & set_minute
set_second = second(now)
if len(set_second) = 1 then set_second = "0" & set_second
%><%=date_ju1 & set_hour & set_minute & set_second %>
