<?php

namespace Tests\Feature;

use App\Contract;
use App\StaffInfoModel\StaffPersonalInfo;
use Modules\Payroll\Helpers\FindNewStaffForPayroll;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class PayrollTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testIsAvailableToCheckPayrollHalfMonth()
    {
        //Script: select c.id as contract_id, spi.* from staff_personal_info spi
        //	inner join contracts c on spi.id=c.staff_personal_info_id
        // where spi.staff_id=791

        //Command update lib: composer require --dev phpunit/phpunit ^9 --with-all-dependencies
        //Command: ./vendor/bin/phpunit tests/Feature/PayrollTest.php

        //Test case UserId=791, ContractId=2843
        $payrollDate = date('Y-m-d', strtotime('2021-12-27'));
        $staffPersonal = StaffPersonalInfo::with('currentContract')
            ->where('staff_id', 791)
            ->first();
//        $contract = Contract::find(2843);

        $findNewStaffForPayroll = new FindNewStaffForPayroll($staffPersonal->contract, $payrollDate);

        $this->assertEquals(false, $findNewStaffForPayroll->isNotAvailableToCheckHalfMonth());
    }
}
