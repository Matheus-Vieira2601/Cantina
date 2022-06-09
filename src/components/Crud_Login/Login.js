import React, { Component } from "react";

export default function Login() {
    return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="nickName">Usuário</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nickName"
                            placeholder="Usuário" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Senha" />
                    </div>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </form>
            </div>
    )
}