import React, { Component } from "react";

class Form extends Component {
    state = {
        data: [
            { id: "username", username: "", active: false },
            { id: "password", password: "", active: false }
        ]
    };

    getInputObject = (id) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((input) => input.id === id);
        const input = { ...inputs[index] };

        return input;
    };

    handleChange = ({ currentTarget: input }) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.name);
        inputs[index][input.name] = input.value;
        this.setState({ inputs });

        this.handleActiveField(input);
    };

    handleActiveField = (input) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.name);
        inputs[index].active = true;

        this.setState({ inputs });
    };

    handleDisableField = ({ currentTarget: input }) => {
        const inputs = [...this.state.data];
        const index = inputs.findIndex((i) => i.id === input.name);

        if (input.value === "") {
            inputs[index].active = false;

            this.setState({ inputs });
        }
    };

    render() {
        const { data } = this.state;
        const { username, active: usernameActive } = this.getInputObject("username");
        const { password, active: passwordActive } = this.getInputObject("password");

        return (
            <form>
                <div className="form-group">
                    <label
                        className={usernameActive ? 'active' : ''}
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className='form-field'
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                        onDisable={this.handleDisableField}
                    />
                </div>
                <div className='form-group'>
                    <label
                        className={passwordActive ? 'active' : ''}
                        htmlFor="username"
                    >
                        Password
                    </label>
                    <input
                        className='form-field'
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        // onFocus={this.handleActiveField}
                        onDisable={this.handleDisableField}
                    />
                </div>
            </form>
        );
    }
}

export default Form;
