import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <div>
                <form>
                    <label>Place</label>
                    <input type="text" name="place"></input>

                    <label>Date</label>
                    <input type="text" name="date"></input>

                    <label>Fav</label>
                    <input type="text" name="fav"></input>

                    <label>Least Fav</label>
                    <input type="text" name="leastfav"></input>

                    <input type="submit" value="ENTER"></input>
                </form>

            </div>
        );
    }
}

export default New;