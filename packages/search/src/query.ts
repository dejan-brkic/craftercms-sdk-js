/*
 * Copyright (C) 2007-2019 Crafter Software Corporation. All rights reserved.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

// TODO add return types

/**
 * Query Object
 */
export class Query {

  /**
   * Creates an empty query
   * @constructor
   */
  constructor(public params: Object = {}) {

  }

  /**
   * Sets a single value parameter in the query object
   * @param {string} name - Name of the parameter
   * @param {object} value - Value of the parameter
   */
  setParam(name, value) {
    this.params[name] = value;
  }

  /**
   * Adds a value for a parameter in the query object
   * @param {string} name - Name of the parameter
   * @param {object} value - Value of the parameter
   */
  addParam(name, value) {
    if (this.params[name]) {
      if (Array.isArray(this.params[name])) {
        this.params[name].push(value);
      } else {
        this.params[name] = [this.params[name], value];
      }
    } else {
      this.params[name] = value;
    }
  }

}
