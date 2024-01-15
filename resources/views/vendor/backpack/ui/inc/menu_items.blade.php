{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />
<x-backpack::menu-item title="Posts" icon="la la-question" :link="backpack_url('posts')" />
<x-backpack::menu-item title="Tags" icon="la la-question" :link="backpack_url('tag')" />
<x-backpack::menu-item title="Normal users" icon="la la-question" :link="backpack_url('normal-user')" />
<x-backpack::menu-item title="Coding languages" icon="la la-question" :link="backpack_url('coding-language')" />
<x-backpack::menu-item title="Teams" icon="la la-question" :link="backpack_url('team')" />