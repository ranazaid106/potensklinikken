<?php

namespace App\Http\Controllers;
use DateTime;
use Google\Client;
use App\Models\PauseTime;
use Google\Service\Calendar;
use Illuminate\Http\Request;
use App\Models\GoogleCalender;
use Illuminate\Support\Carbon;
class PouseController extends Controller
{
  
public function pouseinsert()
{

    $client = new Client();
    // $client->setAuthConfig('AIzaSyAh-Xezwpi09RFOtKW1avGmVeQd2a5F2rA'); // Replace with the path to your client secret JSON file
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
        // You can also use the following alternative to add exactly 7 days:
        // $oneWeekLater = Carbon::now()->addDays(7);

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

        // return response()->json(['time' => $employeeTime]);
    } catch (\Exception $error) {
        return response()->json(['error' => $error->getMessage()], 500);
    }



//get client time tabel end





//get client time clinic start


    $client = new Client();
    // $client->setDeveloperKey('AIzaSyAh-Xezwpi09RFOtKW1avGmVeQd2a5F2rA'); 
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
        // You can also use the following alternative to add exactly 7 days:
        // $oneWeekLater = Carbon::now()->addDays(7);

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

        // return response()->json(['time' => $clinicTime]);
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
    
















  
}



public function executeRound()
{
    // Your logic for the "round" goes here
    // For this example, let's just print a message
    // echo "Round executed!";

    dd('hello');
}



}
