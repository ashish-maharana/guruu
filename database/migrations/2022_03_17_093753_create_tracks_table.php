<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTracksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->unsignedBigInteger('track_type_id');
            $table->text('track_frequency');
            $table->bigInteger('duration_in_mins');
            $table->text('skill_level')->nullable();
            $table->boolean('skip_weekends')->default(false);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->boolean('has_end_date')->default(false);
            $table->bigInteger('student_capacity');
            $table->json('medium_of_instruction');
            $table->text('delivery_method');
            $table->bigInteger('rate_per_class')->nullable();
            $table->boolean('is_first_class_free')->default(false);
            $table->date('enrolment_start_date')->nullable();
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tracks');
    }
}
