<template>
    <div>
        <h1>财务模块</h1>
        <el-table :data="tableData"
                  stripe
                  style="width: 100%">
            <el-table-column prop="date"
                             label="日期"
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="address"
                             label="地址">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="{row,$index}">
                    <el-button type="primary"
                               @click="edit(row,$index)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="收货地址"
                   :visible.sync="dialogTableVisible">
            <el-form>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="日期">
                    <el-date-picker v-model="form.date"
                                    value-format="yyyy-MM-dd"
                                    type="date"
                                    placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-button type="danger"
                           @click="dialogTableVisible = false">取消</el-button>
                <el-button type="success"
                           @click="sure">确定</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from "vue-property-decorator"

    @Component({
        name: "finance"
    })
    export default class Finance extends Vue {
        dialogTableVisible = false
        form: any = {
            address: "上海市普陀区金沙江路 1518 弄",
            date: "2016-05-02",
            name: "王小虎"
        }
        index = -1

        tableData = [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]

        sure() {
            this.$set(this.tableData, this.index, this.form)
            this.dialogTableVisible = false
        }
        edit(row: any, index: number) {
            this.form = { ...row }
            this.index = index
            this.dialogTableVisible = true
        }

    }
</script>

<style>
</style>