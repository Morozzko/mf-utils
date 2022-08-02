<div style='display: flex;align-items: center;justify-content: center'>
<img src='https://svgshare.com/i/jfX.svg' alt=''/>
</div> 

## Share data from child microfronted to parent without callback hell

## Import

```javascript
import {EventTransfer, useSubscribe} from '@npm.piece/mf-utils'
```

## Example №1

```javascript
const [state, setState] = useState('')

const onClickHandler = () => {
    EventTransfer({
        data: state + 'PATCH',
        name: 'mf-1',
    })
}

useSubscribe('mf-1', e => setState(e))
```

```jsx
    <button onClick={onClickHandler}>send</button>
    <input
        value={state}
        onChange={event => {
            setState(event.target.value)
        }}
    />
```

## Example №2

```javascript
const [state, setState] = useState('')

const onClickHandler = () => {
    EventTransfer({
        data: {
            text: state + 'PATCH',
        },
        name: {
            mfName: 'mf',
            eventName: '1',
        },
        //show console.log with information in devtools
        debug: true,
    })
}

useSubscribe('mf-1', e => setState(e.text))
```

```jsx
    <button onClick={onClickHandler}>send</button>
    <input
        value={state}
        onChange={event => {
            setState(event.target.value)
        }}
    />
```

