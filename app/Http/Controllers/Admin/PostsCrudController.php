<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\PostsRequest;
use App\Models\Posts;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class PostsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class PostsCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
//     public function create()
// {
//     $this->crud->hasAccessOrFail('create');

//     // make and initialize an empty instance of the Post model
//     $post = new Posts();

//     // set the user that created the post to the currently logged in user
//     $post->user_id = backpack_user()->id;

//     // get the Post model
//     $model = $this->crud->getModel();

//     // get the table name of the Post model
//     $tableName = $model->getTable();

//     // load the view from /resources/views/vendor/backpack/crud/ if it exists, otherwise load the one in the package
//     return view($this->crud->getCreateView(), [
//         'title' => $this->crud->getTitle() ?? trans('backpack::crud.add').' '.$tableName,
//         'model' => $model,
//         'tableName' => $tableName,
//         'post' => $post,
//         'crud' => $this->crud,
//     ]);
// }
    public function setup()
    {
        CRUD::setModel(\App\Models\Posts::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/posts');
        CRUD::setEntityNameStrings('posts', 'posts');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::setFromDb(); // set columns from db columns.

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(PostsRequest::class);
        CRUD::field('title')->type('text');
        CRUD::field('body')->type('textarea');
        CRUD::field([   // Upload
            'name'      => 'image',
            'label'     => 'Image',
            'type'      => 'upload',
            'withFiles' => true
            ]);

            CRUD::field([   // select_from_array
                'name'        => 'label',
                'label'       => "label",
                'type'        => 'select_from_array',
                'options'     => ['coding' => 'Coding', 'video' => 'Video Editing','graphic' => 'Graphic Design','buisness' => 'Buisness Management'],
                'allows_null' => false,
                
                // 'allows_multiple' => true, // OPTIONAL; needs you to cast this to array in your model;
            ]);
            
            

        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
