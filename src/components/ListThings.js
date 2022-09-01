import React from 'react'


export function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
  }


function ListThings(props) {
    var results = []
    for(var i in props.numbers)
        results.push(["Key is: ",i, " Value is: ", props.numbers[i]]);
    const listItems = results.map((result) =>
      // Correct! Key should be specified inside the array.
      <ListItem key={result.toString()} value={result} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
}

export default ListThings