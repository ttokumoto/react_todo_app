
/**
 * Todoを追加する。
 * @param {string} text - Todoのテキスト
 */
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text
})

/**
 * Todoをチェックする。
 * @param {number} id - TodoのID 
 */
export const checkTodo = (id) => ({
    type: 'CHECK_TODO',
    id
})

/**
 * Todoを編集する。
 * @param {number} id - TodoのID
 * @param {string} text - Todoのテキスト
 */
export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    id,
    text
})

/**
 * Todoを削除する。
 * @param {number} id - TodoのID 
 */
export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    id: id
})
