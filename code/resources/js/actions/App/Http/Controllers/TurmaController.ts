import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/turmas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::index
* @see app/Http/Controllers/TurmaController.php:34
* @route '/turmas'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\TurmaController::store
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/turmas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TurmaController::store
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::store
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::store
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::store
* @see app/Http/Controllers/TurmaController.php:39
* @route '/turmas'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
export const show = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
show.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return show.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
show.get = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
show.head = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
const showForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
showForm.get = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TurmaController::show
* @see app/Http/Controllers/TurmaController.php:86
* @route '/turmas/{turma}'
*/
showForm.head = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\TurmaController::update
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
export const update = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\TurmaController::update
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
update.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return update.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::update
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
update.put = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TurmaController::update
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
const updateForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::update
* @see app/Http/Controllers/TurmaController.php:65
* @route '/turmas/{turma}'
*/
updateForm.put = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\TurmaController::destroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
export const destroy = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/turmas/{turma}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TurmaController::destroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
destroy.url = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { turma: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { turma: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            turma: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        turma: typeof args.turma === 'object'
        ? args.turma.id
        : args.turma,
    }

    return destroy.definition.url
            .replace('{turma}', parsedArgs.turma.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TurmaController::destroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
destroy.delete = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TurmaController::destroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
const destroyForm = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TurmaController::destroy
* @see app/Http/Controllers/TurmaController.php:81
* @route '/turmas/{turma}'
*/
destroyForm.delete = (args: { turma: number | { id: number } } | [turma: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const TurmaController = { index, store, show, update, destroy }

export default TurmaController