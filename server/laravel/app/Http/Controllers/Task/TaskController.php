<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    public function index()
    {
        $task = Task::get();
        return response()->json([
            'message' => 'Task List',
            'data' => $task
        ]);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'task_name' => 'required',
            'task_desc' => 'required',
            'status' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation Error',
                'error' => $validator->errors()
            ]);
        }

        $task = new Task();
        $task->task_name = $request->task_name;
        $task->task_desc = $request->task_desc;
        $task->status = $request->status;
        $task->save();

        return response()->json([
            'success' => 'Task Created',
        ]);
    }
    public function edit($id)
    {
        $task = Task::find($id);
        return response()->json( [
            'task' => $task
        ]);
    }
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'task_name' => 'required',
            'task_desc' => 'required',
            'status' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation Error',
                'error' => $validator->errors()
            ]);
        }
        $task = Task::find($id);
        $task->task_name = $request->task_name;
        $task->task_desc = $request->task_desc;
        $task->status = $request->status;
        $task->save();

        return response()->json([
            'success' => 'Task Updated',
        ]);
    }

    public function destroy($id)
    {
        $task = Task::find($id);
        $task->delete();

        return response()->json([
            'success' => 'Task Deleted',
        ]);
    }
}
