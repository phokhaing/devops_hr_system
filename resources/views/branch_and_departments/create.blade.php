@extends('adminlte::page')

@section('title', 'Create new branch or department')

@section('content')

    @include('partials.breadcrumb')

    <div class="panel panel-default">
        <div class="panel-heading"><label for="">Create New Branch Or Department</label></div>
        <div class="panel-body">
            {{ session()->get('message') }}
            <div class="row">
                <div class="col-sm-12">
                    <form action="{{ url('/branch-and-department/store') }}" method="POST" role="form">
                        {{ Form::token() }}
                        <div class="row">
                            <div class="form-group col-sm-6 col-md-6 @if($errors->has('company_code')) has-error @endif">
                                <?php
                                form_label([
                                    'for' => 'company_code',
                                    'value' => 'Company *',
                                ]);
                                ?>
                                <select class="form-control" name="company_code" id="company_code" >
                                    <option value=""><< {{ __('label.company') }} >></option>
                                    @foreach($companies as $key => $value)
                                        @if(old('company_code') == $value->company_code)
                                            <option value="{{ $value->company_code }}" selected>{{ $value->company_code.'-'.$value->name_kh }}</option>
                                        @endif
                                        <option value="{{ $value->company_code }}" {{ ($value->company_code == auth()->user()->company_code) }}>
                                            {{ $value->company_code.'-'.$value->name_kh }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="form-group col-sm-6 col-md-6 @if($errors->has('branch_or_department')) has-error @endif">
                                <?php
                                form_label([
                                    'for' => 'branch_or_department',
                                    'value' => 'Branch Or Department *',
                                ]);
                                ?>
                                <select class="form-control" name="branch_or_department" id="branch_or_department">
                                    <option value=""><< {{ __('label.branch_or_department') }} >></option>
                                    <option value="{{ HEADOFFICE }}">{{ 'ការិយាល័យកណ្ដាល' }}</option>
                                    <option value="{{ DEPARTMENT }}">{{ __('label.department') }}</option>
                                    <option value="{{ BRANCH }}">{{ __('label.branch') }}</option>
                                </select>
                            </div>
                            <div class="form-group col-sm-6 col-md-6 @if($errors->has('name_en')) has-error @endif">
                                <?php
                                form_label([
                                    'for' => 'name_en',
                                    'value' => 'Name EN *',
                                ]);
                                form_text([
                                    'name' => 'name_en',
                                    'class' => 'form-control',
                                    'id' => 'name_en',
                                    'value' => old('name_en'),                
                                ]);
                                ?>
                            </div>
                            <div class="form-group col-sm-6 col-md-6 @if($errors->has('name_km')) has-error @endif">
                                <?php
                                form_label([
                                    'for' => 'name_km',
                                    'value' => 'Name KH *',
                                ]);
                                form_text([
                                    'name' => 'name_km',
                                    'class' => 'form-control',
                                    'id' => 'name_km',
                                    'value' => old('name_km')
                                ]);
                                ?>
                            </div>
                            <div class="form-group col-sm-6 col-md-6 @if($errors->has('short_name')) has-error @endif">
                                <?php
                                form_label([
                                    'for' => 'short_name',
                                    'value' => 'Short name *',
                                ]);
                                form_text([
                                    'name' => 'short_name',
                                    'class' => 'form-control',
                                    'id' => 'short_name',
                                    'value' => old('short_name')
                                ]);
                                ?>
                            </div>
                            <div class="col-xs-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> <!-- .panel-default -->
@stop
