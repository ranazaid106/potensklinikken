<?php

namespace App\Http\Controllers;
use DateTime;
use Google\Client;
use App\Models\PauseTime;
use Google\Service\Calendar;
use Illuminate\Http\Request;
use App\Models\GoogleCalender;
use Illuminate\Support\Carbon;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;

class GoogleCalendarController extends Controller
{


public function test()
{


$uniqueDayNumbers = GoogleCalender::distinct()->pluck('day_number');
$arr = [];
foreach ($uniqueDayNumbers as $dayNumber) {
$dataForDay = GoogleCalender::where('day_number', $dayNumber)->where('start_time_short','!=',"" )->first();
    
 $arr[]= $dataForDay->start_time_short;
 $arr[]= $dataForDay->end_time_short;
}
    $client = new \GuzzleHttp\Client();
$response = $client->put("https://system.easypractice.net/api/v1/calendars/616534/opening-times", [
    'headers' => [
            "Content-Type" => "application/json",
            "Accept" => "application/json",
            "Authorization" => "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjM2ZjFmNGM2MWZjMDI5NzZhODQ3ZWYzODNjOGNhNDJiOTM4MTk2YjNmMThhYTIzNDI2MjRjZDg5YThiYTk3YTE2MzgwMzJmZDJhMzEwNDUiLCJpYXQiOjE2OTEzNTUwMDYuMDAzNTk2LCJuYmYiOjE2OTEzNTUwMDYuMDAzNTk4LCJleHAiOjE4NDkyMDc4MDYuMDAxMjM4LCJzdWIiOiI1NDYyMyIsInNjb3BlcyI6WyJjbGllbnRzLXJlYWR3cml0ZSIsImpvdXJuYWxzLXJlYWR3cml0ZSIsImpvdXJuYWwtZmlsZXMtcmVhZCIsImNhbGVuZGFycy1yZWFkd3JpdGUiLCJpbnZvaWNlcy1yZWFkd3JpdGUiLCJDbGluaWNBcGkiLCJlYXN5cGF5LXJlYWQiLCJib29raW5ncy1yZWFkd3JpdGUiXX0.iSMXf8Mzitwoi3_n1RgnTU_WEi67K1EYFATg6mb9dAZ_SQKLYzEZJ_Rdq5j7WMZ3C4YX1Z_6oLBlJeLgrt0vGKNw9TC4G0ceA7lvtnqDz-N7AuO90v-RF2ED5pZFG0dpoFARgnZP9O9GC4ZcTBUiTvskdeaGXi2KhPbmB5xJ7fTe8m5zXVrmrGZF5JzU7sz-6dcvwsD5X6PTKUpoFm7bOEQA91GI6qeZ57sIgr_CIQN-GSVIx3Igmr-QMm-436BEkrgmhg693xH6znPakLfUxESmbEMEsHmtTw6Fo7r31cqae44S0BV6GFuIEs3Tbl8Mcw6qw3eaqEgC0iT1tlyiSNfVnXVMnanmW5XtBIXOokgKUMXB2tjJ34BptGn7MrovqtTmfPH-VBLX3BlGY_Zm0XjI6-zsh3j_v_qiKdFvAl3F-jrTxLRc6wJLWXc-SFvVFTHHSPeG3JI6dYTfw-qacInAhCO8zLtcaz9zX1eFnhhNcKxxA_atqgsVRftNm9a-DrMRsDfWhqHbIoAVrmfBpOJjU-OBj9N9mulqXaPijlcL59LvLH0-dMw4IaG-fjXcNite6SQwCkyDz2Q_tDGvhBu-j69c750AVMu6-kHNPnxK7cTvlNlEWHALpgl_f96bXiRmlAV7gwNYPFs-vXsM6fm1w477mmtWAEJe3yBGAN8",
        ],
        'json' => [
            "show_in_calendar" => true,
            "times" => [
                "monday_start" => isset($arr[0]) ? $arr[0] : "10:30",
                "monday_end" => isset($arr[1]) ? $arr[1] : "10:30",
                "monday_closed" =>(isset($arr[0]) && isset($arr[1])) ? false : true,  
                "tuesday_start" => isset($arr[2]) ? $arr[2] : "10:30",
                "tuesday_end" => isset($arr[3]) ? $arr[3] : "10:30",
                "tuesday_closed" => (isset($arr[2]) && isset($arr[3])) ? false : true,  
                "wednesday_start" => isset($arr[4]) ? $arr[4] : "10:30",
                "wednesday_end" => isset($arr[5]) ? $arr[5] : "10:30",
                "wednesday_closed" => (isset($arr[4]) && isset($arr[5])) ? false : true,
                "thursday_start" => isset($arr[6]) ? $arr[6] : "10:30",
                "thursday_end" => isset($arr[7]) ? $arr[7] : "10:30",
                "thursday_closed" => (isset($arr[6]) && isset($arr[7])) ? false : true, 
                "friday_start" => isset($arr[8]) ? $arr[8] : "10:30",
                "friday_end" => isset($arr[9]) ? $arr[9] : "10:30",
                "friday_closed" => (isset($arr[8]) && isset($arr[9])) ? false : true,
                "saturday_start" => isset($arr[10]) ? $arr[10] : "10:30",
                "saturday_end" => isset($arr[11]) ? $arr[11] : "10:30",
                "saturday_closed" => (isset($arr[10]) && isset($arr[11])) ? false : true,
                "sunday_start" => isset($arr[12]) ? $arr[12] : "10:30",
                "sunday_end" => isset($arr[13]) ? $arr[13] : "10:30",
                "sunday_closed" => (isset($arr[12]) && isset($arr[13])) ? false : true,
            ],
        ],
]);


$body = $response->getBody();
print_r(json_decode((string) $body));
}







public function pouse()
{




    $uniqueDayNumbers = PauseTime::all();

    foreach ($uniqueDayNumbers as $dayNumber) {
        // dd($dayNumber);

    $client = new \GuzzleHttp\Client();
$response = $client->post("https://system.easypractice.net/api/v1/calendars/616517/pauses", [
    'headers' => [
            "Content-Type" => "application/json",
            "Accept" => "application/json",
            "Authorization" => "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjM2ZjFmNGM2MWZjMDI5NzZhODQ3ZWYzODNjOGNhNDJiOTM4MTk2YjNmMThhYTIzNDI2MjRjZDg5YThiYTk3YTE2MzgwMzJmZDJhMzEwNDUiLCJpYXQiOjE2OTEzNTUwMDYuMDAzNTk2LCJuYmYiOjE2OTEzNTUwMDYuMDAzNTk4LCJleHAiOjE4NDkyMDc4MDYuMDAxMjM4LCJzdWIiOiI1NDYyMyIsInNjb3BlcyI6WyJjbGllbnRzLXJlYWR3cml0ZSIsImpvdXJuYWxzLXJlYWR3cml0ZSIsImpvdXJuYWwtZmlsZXMtcmVhZCIsImNhbGVuZGFycy1yZWFkd3JpdGUiLCJpbnZvaWNlcy1yZWFkd3JpdGUiLCJDbGluaWNBcGkiLCJlYXN5cGF5LXJlYWQiLCJib29raW5ncy1yZWFkd3JpdGUiXX0.iSMXf8Mzitwoi3_n1RgnTU_WEi67K1EYFATg6mb9dAZ_SQKLYzEZJ_Rdq5j7WMZ3C4YX1Z_6oLBlJeLgrt0vGKNw9TC4G0ceA7lvtnqDz-N7AuO90v-RF2ED5pZFG0dpoFARgnZP9O9GC4ZcTBUiTvskdeaGXi2KhPbmB5xJ7fTe8m5zXVrmrGZF5JzU7sz-6dcvwsD5X6PTKUpoFm7bOEQA91GI6qeZ57sIgr_CIQN-GSVIx3Igmr-QMm-436BEkrgmhg693xH6znPakLfUxESmbEMEsHmtTw6Fo7r31cqae44S0BV6GFuIEs3Tbl8Mcw6qw3eaqEgC0iT1tlyiSNfVnXVMnanmW5XtBIXOokgKUMXB2tjJ34BptGn7MrovqtTmfPH-VBLX3BlGY_Zm0XjI6-zsh3j_v_qiKdFvAl3F-jrTxLRc6wJLWXc-SFvVFTHHSPeG3JI6dYTfw-qacInAhCO8zLtcaz9zX1eFnhhNcKxxA_atqgsVRftNm9a-DrMRsDfWhqHbIoAVrmfBpOJjU-OBj9N9mulqXaPijlcL59LvLH0-dMw4IaG-fjXcNite6SQwCkyDz2Q_tDGvhBu-j69c750AVMu6-kHNPnxK7cTvlNlEWHALpgl_f96bXiRmlAV7gwNYPFs-vXsM6fm1w477mmtWAEJe3yBGAN8",
        ],


      
        'json' => [
                // dd($dayNumber->start_pouse);
                "weekday" => $dayNumber->day,
                "start_time" =>  $dayNumber->start_pouse,
                "end_time" => $dayNumber->end_pouse,
        ],



]);


}

$body = $response->getBody();
print_r(json_decode((string) $body));













}





































    public function getCommonTimeSlots(Request $request)
    {

        DB::table("google_calenders")->truncate();
        DB::table("pause_times")->truncate();


        $client = new Client();
        $client->setDeveloperKey('AIzaSyAh-Xezwpi09RFOtKW1avGmVeQd2a5F2rA'); 
        $client->addScope(Calendar::CALENDAR_READONLY);
        try {
            $employeeTime = [
                'monday' => [],
                'tuesday' => [],
                'wednesday' => [],
                'thursday' => [],
                'friday' => [],
                'saturday' => [],
                'sunday' => [],
            ];
            $oneWeekLater = Carbon::now()->addWeek();
            $service = new Calendar($client);
            $events = $service->events->listEvents('techraees786@gmail.com', [
                'timeMin' => Carbon::now()->toAtomString(),
                'timeMax' => $oneWeekLater->toAtomString(),
                'maxResults' => 2500, // Maximum number of results Google Calendar API supports
                'singleEvents' => true,
                'orderBy' => 'startTime',
            ]);
            $days = [
                'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
            ];
            foreach ($events as $event) {
                $date = new \DateTime($event->start->dateTime);
                $day = $days[$date->format('w')];

                $employeeTime[$day][] = [
                    'startGoogle' => $event->start->dateTime,
                    'endGoogle' => $event->end->dateTime,
                    'summary' => $event->getSummary(),
                ];
            }
        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 500);
        }

//get client time tabel end
//get client time clinic start

        $client = new Client();
        $client->setDeveloperKey('AIzaSyAh-Xezwpi09RFOtKW1avGmVeQd2a5F2rA'); // Replace with the path to your client secret JSON file
        $client->addScope(Calendar::CALENDAR_READONLY);
        try {
            $clinicTime = [
                'monday' => [],
                'tuesday' => [],
                'wednesday' => [],
                'thursday' => [],
                'friday' => [],
                'saturday' => [],
                'sunday' => [],
            ];

            $oneWeekLater = Carbon::now()->addWeek();
            $service = new Calendar($client);
            $events = $service->events->listEvents('702c3ff811bfdba6b88e9102c9e9c2c688cd0339666842ed85bf0ef2cea3e69c@group.calendar.google.com', [
                'timeMin' => Carbon::now()->toAtomString(),
                'timeMax' => $oneWeekLater->toAtomString(),
                'maxResults' => 2500, // Maximum number of results Google Calendar API supports
                'singleEvents' => true,
                'orderBy' => 'startTime',
            ]);
            $days = [
                'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
            ];
            foreach ($events as $event) {
                $date = new \DateTime($event->start->dateTime);
                $day = $days[$date->format('w')];

                $clinicTime[$day][] = [
                    'startGoogle' => $event->start->dateTime,
                    'endGoogle' => $event->end->dateTime,
                    'summary' => $event->getSummary(),
                ];
            }
        } catch (\Exception $error) {
            return response()->json(['error' => $error->getMessage()], 500);
        }

//get client time clinic end
        function findCommonTimeSlots($employeeTime, $clinicTime) {
            $commonSlots = [];
        
            foreach ($employeeTime as $day => $employeeSlots) {
                if (isset($clinicTime[$day])) {
                    foreach ($employeeSlots as $employeeSlot) {
                        foreach ($clinicTime[$day] as $clinicSlot) {
                            $startEmployee = new DateTime($employeeSlot['startGoogle']);
                            $endEmployee = new DateTime($employeeSlot['endGoogle']);
                            $startClinic = new DateTime($clinicSlot['startGoogle']);
                            $endClinic = new DateTime($clinicSlot['endGoogle']);
        
                            if ($startEmployee < $endClinic && $endEmployee > $startClinic) {
                                $start = max($startEmployee, $startClinic);
                                $end = min($endEmployee, $endClinic);
        
                                $commonSlots[$day][] = [
                                    'startGoogle' => $start->format('Y-m-d\TH:i:sO'),
                                    'endGoogle' => $end->format('Y-m-d\TH:i:sO'),
                                    'summary' => 'Common Time Slot'
                                ];
                            }
                        }
                    }
                }
            }
            
            return $commonSlots;
        }

        $commonSlotss = findCommonTimeSlots($employeeTime, $clinicTime);




        $i =0;
        foreach ($commonSlotss as $day => $dayData) {


            if($day == "monday"){
                $day_Nos = '1';
            }else if($day == "tuesday"){
            $day_Nos = '2';
            }else if($day == "wednesday"){
            $day_Nos = '3';
            }
            else if($day == "thursday"){
            $day_Nos = '4';
            }else if($day == "friday"){
            $day_Nos = '5';
            }else if($day == "saturday"){
            $day_Nos = '6';
            }else if($day == "sunday"){
            $day_Nos = '7';
            }

            $clinicSchedule = GoogleCalender::create([
                'day' => $day,
                'day_number' => $day_Nos,
                'start_time' => $dayData[$i]['startGoogle'],
                'end_time' => $dayData[$i]['endGoogle'],
            ]);
           

            $clinicupdate = GoogleCalender::find($clinicSchedule->id);
            $clinicupdate->update([
                'inser_id'=> $clinicSchedule->id
            ]);




            $testing = GoogleCalender::where('id' , $clinicSchedule->id)->first();
            if($testing->day == "monday"){
                $day_no = '1';
            }else if($testing->day == "tuesday"){
            $day_no = '2';
            }else if($testing->day == "wednesday"){
            $day_no = '3';
            }
            else if($testing->day == "thursday"){
            $day_no = '4';
            }else if($testing->day == "friday"){
            $day_no = '5';
            }else if($testing->day == "saturday"){
            $day_no = '6';
            }else if($testing->day == "sunday"){
            $day_no = '7';
            }

            $lowestDateTimeRecord = GoogleCalender::where('inser_id' , $clinicSchedule->id)->orderBy('start_time', 'asc')->first();
            $formattedTime_start= Carbon::parse($lowestDateTimeRecord->start_time)->format('H:i');
            $formattedDate_start = Carbon::parse($lowestDateTimeRecord->start_time)->format('Y-m-d');
            $highestDateTimeRecord = GoogleCalender::where('inser_id' , $clinicSchedule->id)->orderBy('end_time', 'desc')->first();
            $formattedTime_end = Carbon::parse($highestDateTimeRecord->end_time)->format('H:i');
            $formattedDate_end = Carbon::parse($highestDateTimeRecord->end_time)->format('Y-m-d');


            $j = $i + 1;
            foreach ($dayData as $nestedData) {
                if ($nestedData === $dayData[$i]) {
                    continue;
                };         

                GoogleCalender::create([
                    'start_time' => $dayData[$j]['startGoogle'],
                    'end_time' => $dayData[$j]['endGoogle'],
                    'inser_id' => $clinicSchedule->id,
                    'day_number' => $day_no,
                    'start_time_short' => $formattedTime_start,
                    'end_time_short' => $formattedTime_end,
                    'start_date' => $formattedDate_start,
                    'end_date' => $formattedDate_end,
                ]);
                    $j++;
            }
        }
        $i++;







// Function to convert Google time format to hours and minutes
function googleTimeToHM($time)
{
    $dateTime = new DateTime($time);
    return $dateTime->format('H:i');
}

// Function to find gaps between time ranges
function findGaps($times)
{
    $gaps = [];
    for ($i = 0; $i < count($times) - 1; $i++) {
        $end = new DateTime($times[$i]['endGoogle']);
        $start = new DateTime($times[$i + 1]['startGoogle']);
        if ($end < $start) {
            $gap = [
                "start" => googleTimeToHM($times[$i]['endGoogle']),
                "end" => googleTimeToHM($times[$i + 1]['startGoogle'])
            ];
            $gaps[] = $gap;
        }
    }
    return $gaps;
}

// Process each day of the week
$result = [];
foreach ($commonSlotss as $day => $times) {
    // Sort the times by startGoogle
    usort($times, function ($a, $b) {
        return strtotime($a['startGoogle']) - strtotime($b['startGoogle']);
    });

    // Find gaps for the day
    $gaps = findGaps($times);

    // Format and store the gaps in the desired format
    $formattedGaps = [];
    foreach ($gaps as $gap) {
        $formattedGap = $gap['start'] . " to " . $gap['end'];
        $formattedGaps[] = $formattedGap;
    }

    $result[$day] = $formattedGaps;
}


$p = 0;
foreach($result as $key => $slots){

    if($key == "monday"){
        $day_No = '1';
    }else if($key == "tuesday"){
    $day_No = '2';
    }else if($key == "wednesday"){
    $day_No = '3';
    }
    else if($key == "thursday"){
    $day_No = '4';
    }else if($key == "friday"){
    $day_No = '5';
    }else if($key == "saturday"){
    $day_No = '6';
    }else if($key == "sunday"){
    $day_No = '7';
    }

    foreach($slots as $slot){
        $timedate = $slot;
        $name = explode(' to ', $timedate);
        $start_pouse = $name[0];
        $last_pouse = $name[1];
      PauseTime::create([
                    'day' => $day_No,
                    'start_pouse' => $start_pouse,
                    'end_pouse' => $last_pouse,
                ]);
    }
  }
  $p++;
    


  return view('home');


    }




}
