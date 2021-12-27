<?php


namespace Modules\HRTraining\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;

class StoreCourseSettingRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'category' => 'required',
            'course_title' => 'required',
            'department' => 'required',
            'position' => 'required',
            'status' => 'required',

        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}