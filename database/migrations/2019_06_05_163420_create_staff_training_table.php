<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStaffTrainingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('staff_training', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('staff_personal_info_id')->nullable($value = true)->index();
            $table->string('subject')->nullable($value = true);
            $table->string('trainer')->nullable($value = true);
            $table->string('school')->nullable($value = true);
            $table->string('place')->nullable($value = true);
            $table->date('start_date')->nullable($value = true);
            $table->date('end_date')->nullable($value = true);
            $table->integer('province_id')->nullable($value = true)->index();
            $table->integer('district_id')->nullable($value = true)->index();
            $table->integer('commune_id')->nullable($value = true)->index();
            $table->integer('village_id')->nullable($value = true)->index();
            $table->string('house_no')->nullable($value = true);
            $table->string('street_no')->nullable($value = true);
            $table->string('other_location')->nullable($value = true);
            $table->text('description')->nullable($value = true);
            $table->tinyInteger('flag')->nullable($value = true);
            $table->integer('created_by')->nullable($value = true)->index();
            $table->integer('updated_by')->nullable($value = true)->index();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('staff_training');
    }
}
