from win10toast import ToastNotifier
import time
import datetime
import sys

year = sys.argv[1]
month =sys.argv[2]
day= sys.argv[3]
hour = sys.argv[4]
minute = sys.argv[5]
second = 00
microsecond=000000


toaster = ToastNotifier()
toaster.show_toast("Your reminder has been set for: " + year + month + day + hour,  icon_path=None, duration=10)


#year = int(input('Enter a year:'))
#month = int(input('Enter a month:'))
#day = int(input('Enter a day:'))
#hour = int(input('Enter the hour:'))
#minute =int(input('Enter the minutes:'))


reminder_date = datetime.datetime(year,month,day,hour,minute,second,microsecond)
print (reminder_date)

toaster = ToastNotifier()
toaster.show_toast("Your reminder has been set for: " + str(reminder_date),  icon_path=None, duration=3)



while (True):
    now = datetime.datetime.now()

    if (now >= reminder_date):
        print("Reminder")
        toaster2 = ToastNotifier()
        toaster2.show_toast("YOUR REMINDER",  icon_path=None, duration=10)
        break
    else:
       print(now)





sys.stdout.flush()



#toaster.show_toast("Example two","This notification is in it's own thread!",icon_path=None,duration=5,threaded=True)
# Wait for threaded notification to finish
#while toaster.notification_active(): time.sleep(0.1)
